import { TransactionRequest } from '@ethersproject/providers'
import { ChefType } from '@sushiswap/client'
import { Amount, Token } from '@sushiswap/currency'
import { NotificationData } from '@sushiswap/ui13/components/toast'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { useAccount } from 'wagmi'
import { SendTransactionResult } from 'wagmi/actions'

import { useMasterChefContract } from '../useMasterChefContract'
import { useSendTransaction } from '../useSendTransaction'

interface UseMasterChefDepositParams {
  chainId: number
  chef: ChefType
  pid: number
  onSuccess?(data: NotificationData): void
  amount?: Amount<Token>
}

type UseMasterChefDeposit = (params: UseMasterChefDepositParams) => ReturnType<typeof useSendTransaction>

export const useMasterChefDeposit: UseMasterChefDeposit = ({ chainId, onSuccess, amount, chef, pid }) => {
  const { address } = useAccount()
  const contract = useMasterChefContract(chainId, chef)

  const onSettled = useCallback(
    (data: SendTransactionResult | undefined) => {
      if (onSuccess && data && amount) {
        const ts = new Date().getTime()
        onSuccess({
          type: 'mint',
          chainId,
          txHash: data.hash,
          promise: data.wait(),
          summary: {
            pending: `Staking ${amount.toSignificant(6)} ${amount.currency.symbol} tokens`,
            completed: `Successfully staked ${amount.toSignificant(6)} ${amount.currency.symbol} tokens`,
            failed: `Something went wrong when staking ${amount.currency.symbol} tokens`,
          },
          groupTimestamp: ts,
          timestamp: ts,
        })
      }
    },
    [amount, chainId, onSuccess]
  )

  const prepare = useCallback(
    (setRequest: Dispatch<SetStateAction<(TransactionRequest & { to: string }) | undefined>>) => {
      if (!address || !chainId || !amount || !contract) return

      setRequest({
        from: address,
        to: contract.address,
        data: contract.interface.encodeFunctionData(
          'deposit',
          chef === ChefType.MasterChefV1
            ? [pid, amount.quotient.toString()]
            : [pid, amount.quotient.toString(), address]
        ),
      })
    },
    [address, amount, chainId, chef, contract, pid]
  )

  return useSendTransaction({
    chainId,
    onSettled,
    prepare,
  })
}
