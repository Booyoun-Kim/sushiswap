import { ChainId } from 'sushi/chain'
import {
  DAI_ADDRESS,
  FRAX_ADDRESS,
  Token,
  Type,
  USDC,
  USDC_ADDRESS,
  USDT,
  USDT_ADDRESS,
  addressMapToTokenMap,
} from 'sushi/currency'

// Ethereum: 101
// BNB: 102
// Avalanche: 106
// Polygon: 109
// Arbitrum: 110
// Optimism: 111
// Fantom: 112

export const STARGATE_CHAIN_ID = {
  // MAINNETS
  [ChainId.ETHEREUM]: 101,
  [ChainId.BSC]: 102,
  [ChainId.AVALANCHE]: 106,
  [ChainId.POLYGON]: 109,
  [ChainId.ARBITRUM]: 110,
  [ChainId.OPTIMISM]: 111,
  // [ChainId.FANTOM]: 112,
  // TESTNETS
  // TODO: Depreciated, replace with goerli
  // [ChainId.RINKEBY]: 10001,
  // [ChainId.BSC_TESTNET]: 10002,
  // [ChainId.AVALANCHE_TESTNET]: 10006,
  // [ChainId.POLYGON_TESTNET]: 10009,
  // TODO: Depreciated, replace with goerli
  // [ChainId.ARBITRUM_RINKEBY_TESTNET]: 10010,
  // TODO: Depreciated, replace with goerli
  // [ChainId.OPTIMISM_KOVAN_TESTNET]: 10011,
  // [ChainId.FANTOM_TESTNET]: 10012,
} as const

export const STARGATE_WIDGET_ADDRESS = {
  [ChainId.ETHEREUM]: '0x02489ac60F7f581445b7D2Dd59bb0A415A1009Df',
  [ChainId.POLYGON]: '0xc2a6A1A8ACcc8BD757BF4b34FBAcB20fbeA87f55',
  [ChainId.AVALANCHE]: '0x0cFF9ACef65A64B5D76e83B70787b27F7416644C',
  [ChainId.FANTOM]: '0x7eA8d498d4db3a8895454F4BF3bD56385ba80968',
  [ChainId.BSC]: '0xa8BA2FF9d0D7d175b2729866bE3D9c51cACb2e00',
  [ChainId.OPTIMISM]: '0x16419058f15a86795933f78dC624B384D09E3a4e',
  [ChainId.ARBITRUM]: '0x962F92cEe9A559d705f8999C92752EbCDD550616',
} as const

export const STARGATE_ROUTER_ADDRESS = {
  [ChainId.ETHEREUM]: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
  [ChainId.POLYGON]: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  [ChainId.AVALANCHE]: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  [ChainId.FANTOM]: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
  [ChainId.BSC]: '0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8',
  [ChainId.OPTIMISM]: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
  [ChainId.ARBITRUM]: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
  // Testnets
  [ChainId.BSC_TESTNET]: '0xbB0f1be1E9CE9cB27EA5b0c3a85B7cc3381d8176',
  [ChainId.AVALANCHE_TESTNET]: '0x13093E05Eb890dfA6DacecBdE51d24DabAb2Faa1',
  [ChainId.POLYGON_TESTNET]: '0x817436a076060D158204d955E5403b6Ed0A5fac0',
  [ChainId.FANTOM_TESTNET]: '0xa73b0a56B29aD790595763e71505FCa2c1abb77f',
} as const

export const STARGATE_ETH_ADDRESS = {
  [ChainId.ETHEREUM]: '0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c',
  [ChainId.ARBITRUM]: '0x82CbeCF39bEe528B5476FE6d1550af59a9dB6Fc0',
  [ChainId.OPTIMISM]: '0xb69c8CBCD90A39D8D3d3ccf0a3E968511C3856A0',
} as const

export const STARGATE_ETH: Record<keyof typeof STARGATE_ETH_ADDRESS, Token> = {
  [ChainId.ETHEREUM]: new Token({
    chainId: ChainId.ETHEREUM,
    address: STARGATE_ETH_ADDRESS[ChainId.ETHEREUM],
    decimals: 18,
    symbol: 'ETH',
    name: 'Ether',
  }),
  [ChainId.ARBITRUM]: new Token({
    chainId: ChainId.ARBITRUM,
    address: STARGATE_ETH_ADDRESS[ChainId.ARBITRUM],
    decimals: 18,
    symbol: 'ETH',
    name: 'Ether',
  }),
  [ChainId.OPTIMISM]: new Token({
    chainId: ChainId.OPTIMISM,
    address: STARGATE_ETH_ADDRESS[ChainId.OPTIMISM],
    decimals: 18,
    symbol: 'ETH',
    name: 'Ether',
  }),
}

export const STARGATE_USDC_ADDRESS = {
  [ChainId.ETHEREUM]: USDC_ADDRESS[ChainId.ETHEREUM],
  [ChainId.POLYGON]: USDC_ADDRESS[ChainId.POLYGON],
  [ChainId.AVALANCHE]: USDC_ADDRESS[ChainId.AVALANCHE],
  [ChainId.FANTOM]: USDC_ADDRESS[ChainId.FANTOM],
  [ChainId.BSC]: USDC_ADDRESS[ChainId.BSC],
  [ChainId.OPTIMISM]: USDC_ADDRESS[ChainId.OPTIMISM],
  [ChainId.ARBITRUM]: USDC_ADDRESS[ChainId.ARBITRUM],
  [ChainId.FANTOM]: USDC_ADDRESS[ChainId.FANTOM],
  // Testnets
  [ChainId.AVALANCHE_TESTNET]: '0x4A0D1092E9df255cf95D72834Ea9255132782318',
  // TODO: Depreciated, replace with goerli
  // [ChainId.ARBITRUM_RINKEBY_TESTNET]: '0x1EA8Fb2F671620767f41559b663b86B1365BBc3d',
  [ChainId.POLYGON_TESTNET]: '0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7',
  // TODO: Depreciated, replace with goerli
  // [ChainId.OPTIMISM_KOVAN_TESTNET]: '0x567f39d9e6d02078F357658f498F80eF087059aa',
  [ChainId.FANTOM_TESTNET]: '0x076488D244A73DA4Fa843f5A8Cd91F655CA81a1e',
} as const

export const STARGATE_USDC: Record<keyof typeof STARGATE_USDC_ADDRESS, Token> =
  {
    [ChainId.ETHEREUM]: USDC[ChainId.ETHEREUM],
    [ChainId.POLYGON]: USDC[ChainId.POLYGON],
    // [ChainId.AVALANCHE]: USDC[ChainId.AVALANCHE],
    [ChainId.AVALANCHE]: new Token({
      chainId: ChainId.AVALANCHE,
      address: STARGATE_USDC_ADDRESS[ChainId.AVALANCHE],
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    }),
    [ChainId.FANTOM]: USDC[ChainId.FANTOM],
    [ChainId.BSC]: USDC[ChainId.BSC],
    [ChainId.OPTIMISM]: USDC[ChainId.OPTIMISM],
    [ChainId.ARBITRUM]: USDC[ChainId.ARBITRUM],
    // Testnets

    [ChainId.AVALANCHE_TESTNET]: new Token({
      chainId: ChainId.AVALANCHE_TESTNET,
      address: STARGATE_USDC_ADDRESS[ChainId.AVALANCHE_TESTNET],
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    }),
    // TODO: Depreciated, replace with goerli
    // [ChainId.ARBITRUM_RINKEBY_TESTNET]: new Token({
    //   chainId: ChainId.ARBITRUM_RINKEBY_TESTNET,
    //   address: STARGATE_USDC_ADDRESS[ChainId.ARBITRUM_RINKEBY_TESTNET],
    //   decimals: 6,
    //   symbol: 'USDC',
    //   name: 'USD Coin',
    // }),
    [ChainId.POLYGON_TESTNET]: new Token({
      chainId: ChainId.POLYGON_TESTNET,
      address: STARGATE_USDC_ADDRESS[ChainId.POLYGON_TESTNET],
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    }),
    // TODO: Depreciated, replace with goerli
    // [ChainId.OPTIMISM_KOVAN_TESTNET]: new Token({
    //   chainId: ChainId.OPTIMISM_KOVAN_TESTNET,
    //   address: STARGATE_USDC_ADDRESS[ChainId.OPTIMISM_KOVAN_TESTNET],
    //   decimals: 6,
    //   symbol: 'USDC',
    //   name: 'USD Coin',
    // }),
    [ChainId.FANTOM_TESTNET]: new Token({
      chainId: ChainId.FANTOM_TESTNET,
      address: STARGATE_USDC_ADDRESS[ChainId.FANTOM_TESTNET],
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    }),
  } as const

export const STARGATE_USDT_ADDRESS = {
  [ChainId.ETHEREUM]: USDT_ADDRESS[ChainId.ETHEREUM],
  [ChainId.POLYGON]: USDT_ADDRESS[ChainId.POLYGON],
  [ChainId.AVALANCHE]: USDT_ADDRESS[ChainId.AVALANCHE],
  [ChainId.BSC]: USDT_ADDRESS[ChainId.BSC],
  [ChainId.BSC_TESTNET]: USDT_ADDRESS[ChainId.BSC_TESTNET],
  [ChainId.ARBITRUM]: USDT_ADDRESS[ChainId.ARBITRUM],
  [ChainId.FANTOM]: USDT_ADDRESS[ChainId.FANTOM],
} as const

export const STARGATE_USDT: Record<keyof typeof STARGATE_USDT_ADDRESS, Token> =
  {
    [ChainId.ETHEREUM]: USDT[ChainId.ETHEREUM],
    [ChainId.POLYGON]: USDT[ChainId.POLYGON],
    [ChainId.AVALANCHE]: USDT[ChainId.AVALANCHE],
    [ChainId.BSC]: USDT[ChainId.BSC],
    [ChainId.BSC_TESTNET]: USDT[ChainId.BSC_TESTNET],
    [ChainId.ARBITRUM]: USDT[ChainId.ARBITRUM],
    [ChainId.FANTOM]: USDT[ChainId.FANTOM],
  } as const

export const STARGATE_DAI_ADDRESS = {
  [ChainId.ETHEREUM]: DAI_ADDRESS[ChainId.ETHEREUM],
  [ChainId.POLYGON]: DAI_ADDRESS[ChainId.POLYGON],
  [ChainId.OPTIMISM]: DAI_ADDRESS[ChainId.OPTIMISM],
} as const

export const STARGATE_DAI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
  STARGATE_DAI_ADDRESS,
) as Record<keyof typeof STARGATE_DAI_ADDRESS, Token>

export const STARGATE_FRAX_ADDRESS = {
  [ChainId.ETHEREUM]: FRAX_ADDRESS[ChainId.ETHEREUM],
  [ChainId.AVALANCHE]: FRAX_ADDRESS[ChainId.AVALANCHE],
  [ChainId.ARBITRUM]: FRAX_ADDRESS[ChainId.ARBITRUM],
  [ChainId.OPTIMISM]: FRAX_ADDRESS[ChainId.OPTIMISM],
} as const

export const STARGATE_FRAX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FRAX',
    name: 'Frax',
  },
  STARGATE_FRAX_ADDRESS,
) as Record<keyof typeof STARGATE_FRAX_ADDRESS, Token>

export const STARGATE_BUSD_ADDRESS = {
  [ChainId.BSC]: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
} as const

export const STARGATE_BUSD: Record<keyof typeof STARGATE_BUSD_ADDRESS, Token> =
  {
    [ChainId.BSC]: new Token({
      chainId: ChainId.BSC,
      address: STARGATE_BUSD_ADDRESS[ChainId.BSC],
      decimals: 18,
      symbol: 'BUSD',
      name: 'BUSD Token',
    }),
  }

export const STARGATE_MAI_ADDRESS = {
  [ChainId.ETHEREUM]: '0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6',
  [ChainId.POLYGON]: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
  [ChainId.AVALANCHE]: '0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b',
  [ChainId.ARBITRUM]: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
  [ChainId.OPTIMISM]: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
  [ChainId.BSC]: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
} as const

export const STARGATE_MAI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MAI',
    name: 'Mai Stablecoin',
  },
  STARGATE_MAI_ADDRESS,
) as Record<keyof typeof STARGATE_MAI_ADDRESS, Token>

export const STARGATE_BRIDGE_TOKENS: Record<number, Token[]> = {
  // MAINNETS
  [ChainId.ETHEREUM]: [
    // STARGATE_ETH[ChainId.ETHEREUM],
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_MAI[ChainId.ETHEREUM],
    STARGATE_FRAX[ChainId.ETHEREUM],
    STARGATE_DAI[ChainId.ETHEREUM],
  ],
  [ChainId.POLYGON]: [
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_MAI[ChainId.POLYGON],
    STARGATE_DAI[ChainId.POLYGON],
  ],
  [ChainId.AVALANCHE]: [
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_MAI[ChainId.AVALANCHE],
    STARGATE_FRAX[ChainId.AVALANCHE],
  ],
  [ChainId.FANTOM]: [STARGATE_USDC[ChainId.FANTOM]],
  [ChainId.BSC]: [
    STARGATE_USDT[ChainId.BSC],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_MAI[ChainId.BSC],
  ],
  [ChainId.OPTIMISM]: [
    // STARGATE_ETH[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_MAI[ChainId.ETHEREUM],
    STARGATE_FRAX[ChainId.ETHEREUM],
    STARGATE_DAI[ChainId.ETHEREUM],
  ],
  [ChainId.ARBITRUM]: [
    // STARGATE_ETH[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_FRAX[ChainId.ETHEREUM],
    STARGATE_MAI[ChainId.ETHEREUM],
  ],
  // TESTNETS
  // [ChainId.RINKEBY]: [],
  // [ChainId.BSC_TESTNET]: [],
  // [ChainId.AVALANCHE_TESTNET]: [],
  // [ChainId.POLYGON_TESTNET]: [],
  // TODO: Depreciated, replace with goerli
  // [ChainId.ARBITRUM_RINKEBY_TESTNET]: [],
  // TODO: Depreciated, replace with goerli
  // [ChainId.OPTIMISM_KOVAN_TESTNET]: [],
  // [ChainId.FANTOM_TESTNET]: [],
}

export const STARGATE_BRIDGE_TOKEN_ADDRESSES: Record<number, string[]> = {
  [ChainId.ETHEREUM]: [
    // STARGATE_ETH_ADDRESS[ChainId.ETHEREUM],
    STARGATE_USDC_ADDRESS[ChainId.ETHEREUM],
    STARGATE_USDT_ADDRESS[ChainId.ETHEREUM],
    STARGATE_DAI_ADDRESS[ChainId.ETHEREUM],
    STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM],
    STARGATE_MAI_ADDRESS[ChainId.ETHEREUM],
  ],
  [ChainId.POLYGON]: [
    STARGATE_USDC_ADDRESS[ChainId.POLYGON],
    STARGATE_USDT_ADDRESS[ChainId.POLYGON],
    STARGATE_DAI_ADDRESS[ChainId.POLYGON],
    STARGATE_MAI_ADDRESS[ChainId.POLYGON],
  ],
  [ChainId.AVALANCHE]: [
    STARGATE_USDC_ADDRESS[ChainId.AVALANCHE],
    STARGATE_USDT_ADDRESS[ChainId.AVALANCHE],
    STARGATE_MAI_ADDRESS[ChainId.AVALANCHE],
    STARGATE_FRAX_ADDRESS[ChainId.AVALANCHE],
  ],
  [ChainId.FANTOM]: [STARGATE_USDC_ADDRESS[ChainId.FANTOM]],
  [ChainId.BSC]: [
    STARGATE_USDT_ADDRESS[ChainId.BSC],
    STARGATE_BUSD_ADDRESS[ChainId.BSC],
    STARGATE_MAI_ADDRESS[ChainId.BSC],
  ],
  [ChainId.OPTIMISM]: [
    // STARGATE_ETH_ADDRESS[ChainId.OPTIMISM],
    STARGATE_USDC_ADDRESS[ChainId.OPTIMISM],
    STARGATE_MAI_ADDRESS[ChainId.OPTIMISM],
    STARGATE_FRAX_ADDRESS[ChainId.OPTIMISM],
    STARGATE_DAI_ADDRESS[ChainId.OPTIMISM],
  ],
  [ChainId.ARBITRUM]: [
    // STARGATE_ETH_ADDRESS[ChainId.ARBITRUM],
    STARGATE_USDC_ADDRESS[ChainId.ARBITRUM],
    STARGATE_USDT_ADDRESS[ChainId.ARBITRUM],
    STARGATE_FRAX_ADDRESS[ChainId.ARBITRUM],
    STARGATE_MAI_ADDRESS[ChainId.ARBITRUM],
  ],
}

export const STARGATE_POOL_ID: Record<number, Record<string, number>> = {
  [ChainId.ETHEREUM]: {
    [STARGATE_USDC_ADDRESS[ChainId.ETHEREUM]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.ETHEREUM]]: 2,
    [STARGATE_DAI_ADDRESS[ChainId.ETHEREUM]]: 3,
    [STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM]]: 7,
    // [STARGATE_USDD_ADDRESS[ChainId.ETHEREUM]]: 11,
    // [STARGATE_ETH_ADDRESS[ChainId.ETHEREUM]]: 13,
    // [STARGATE_sUSD_ADDRESS[ChainId.OPTIMISM]]: 14,
    // [STARGATE_LUSD_ADDRESS[ChainId.ETHEREUM]]: 15,
    [STARGATE_MAI_ADDRESS[ChainId.ETHEREUM]]: 16,
  },
  [ChainId.BSC]: {
    [STARGATE_USDT_ADDRESS[ChainId.BSC]]: 2,
    [STARGATE_BUSD_ADDRESS[ChainId.BSC]]: 5,
    // [STARGATE_USDD_ADDRESS[ChainId.BSC]]: 11,
    [STARGATE_MAI_ADDRESS[ChainId.BSC]]: 16,
  },
  [ChainId.POLYGON]: {
    [STARGATE_USDC_ADDRESS[ChainId.POLYGON]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.POLYGON]]: 2,
    [STARGATE_DAI_ADDRESS[ChainId.POLYGON]]: 3,
    [STARGATE_MAI_ADDRESS[ChainId.POLYGON]]: 16,
  },
  [ChainId.AVALANCHE]: {
    [STARGATE_USDC_ADDRESS[ChainId.AVALANCHE]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.AVALANCHE]]: 2,
    [STARGATE_FRAX_ADDRESS[ChainId.AVALANCHE]]: 7,
    [STARGATE_MAI_ADDRESS[ChainId.AVALANCHE]]: 16,
  },
  [ChainId.ARBITRUM]: {
    [STARGATE_USDC_ADDRESS[ChainId.ARBITRUM]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.ARBITRUM]]: 2,
    [STARGATE_FRAX_ADDRESS[ChainId.ARBITRUM]]: 7,
    // [STARGATE_ETH_ADDRESS[ChainId.ARBITRUM]]: 13,
    [STARGATE_MAI_ADDRESS[ChainId.ARBITRUM]]: 16,
  },
  [ChainId.OPTIMISM]: {
    [STARGATE_USDC_ADDRESS[ChainId.OPTIMISM]]: 1,
    [STARGATE_DAI_ADDRESS[ChainId.OPTIMISM]]: 3,
    [STARGATE_FRAX_ADDRESS[ChainId.OPTIMISM]]: 7,
    // [STARGATE_ETH_ADDRESS[ChainId.OPTIMISM]]: 13,
    // [STARGATE_sUSD_ADDRESS[ChainId.OPTIMISM]]: 14,
    // [STARGATE_LUSD_ADDRESS[ChainId.OPTIMISM]]: 15,
    [STARGATE_MAI_ADDRESS[ChainId.OPTIMISM]]: 16,
  },
  [ChainId.FANTOM]: {
    [STARGATE_USDC_ADDRESS[ChainId.FANTOM]]: 1,
  },
}

export const STARGATE_POOL_ADDRESS: Record<number, Record<string, string>> = {
  [ChainId.ETHEREUM]: {
    [STARGATE_USDC_ADDRESS[ChainId.ETHEREUM]]:
      '0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56',
    [STARGATE_USDT_ADDRESS[ChainId.ETHEREUM]]:
      '0x38EA452219524Bb87e18dE1C24D3bB59510BD783',
    [STARGATE_DAI_ADDRESS[ChainId.ETHEREUM]]:
      '0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d',
    [STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM]]:
      '0xfA0F307783AC21C39E939ACFF795e27b650F6e68',
    // [STARGATE_USDD_ADDRESS[ChainId.ETHEREUM]]: '0x692953e758c3669290cb1677180c64183cEe374e',
    // [STARGATE_ETH_ADDRESS[ChainId.ETHEREUM]]: '0x101816545F6bd2b1076434B54383a1E633390A2E',
    // [STARGATE_sUSD_ADDRESS[ChainId.ETHEREUM]]: '0x590d4f8A68583639f215f675F3a259Ed84790580',
    // [STARGATE_LUSD_ADDRESS[ChainId.ETHEREUM]]: '0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2',
    [STARGATE_MAI_ADDRESS[ChainId.ETHEREUM]]:
      '0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8',
  },

  [ChainId.OPTIMISM]: {
    // [STARGATE_ETH_ADDRESS[ChainId.OPTIMISM]]: '0xd22363e3762cA7339569F3d33EADe20127D5F98C',
    [STARGATE_USDC_ADDRESS[ChainId.OPTIMISM]]:
      '0xDecC0c09c3B5f6e92EF4184125D5648a66E35298',
    [STARGATE_DAI_ADDRESS[ChainId.OPTIMISM]]:
      '0x165137624F1f692e69659f944BF69DE02874ee27',
    [STARGATE_FRAX_ADDRESS[ChainId.OPTIMISM]]:
      '0x368605D9C6243A80903b9e326f1Cddde088B8924',
    [STARGATE_MAI_ADDRESS[ChainId.OPTIMISM]]:
      '0x5421FA1A48f9FF81e4580557E86C7C0D24C18036',
  },
  [ChainId.BSC]: {
    [STARGATE_USDT_ADDRESS[ChainId.BSC]]:
      '0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda',
    [STARGATE_BUSD_ADDRESS[ChainId.BSC]]:
      '0x98a5737749490856b401DB5Dc27F522fC314A4e1',
    // [STARGATE_USDD_ADDRESS[ChainId.BSC]]: '0x4e145a589e4c03cBe3d28520e4BF3089834289Df',
    [STARGATE_MAI_ADDRESS[ChainId.BSC]]:
      '0x7BfD7f2498C4796f10b6C611D9db393D3052510C',
  },
  [ChainId.POLYGON]: {
    [STARGATE_USDC_ADDRESS[ChainId.POLYGON]]:
      '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
    [STARGATE_USDT_ADDRESS[ChainId.POLYGON]]:
      '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c',
    [STARGATE_DAI_ADDRESS[ChainId.POLYGON]]:
      '0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea',
    [STARGATE_MAI_ADDRESS[ChainId.POLYGON]]:
      '0x8736f92646B2542B3e5F3c63590cA7Fe313e283B',
  },
  [ChainId.AVALANCHE]: {
    [STARGATE_USDC_ADDRESS[ChainId.AVALANCHE]]:
      '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
    [STARGATE_USDT_ADDRESS[ChainId.AVALANCHE]]:
      '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c',
    [STARGATE_FRAX_ADDRESS[ChainId.AVALANCHE]]:
      '0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea',
    [STARGATE_MAI_ADDRESS[ChainId.AVALANCHE]]:
      '0x8736f92646B2542B3e5F3c63590cA7Fe313e283B',
  },
  [ChainId.ARBITRUM]: {
    // [STARGATE_ETH_ADDRESS[ChainId.ARBITRUM]]: '0x915A55e36A01285A14f05dE6e81ED9cE89772f8e',
    [USDC_ADDRESS[ChainId.ARBITRUM]]:
      '0x892785f33CdeE22A30AEF750F285E18c18040c3e',
    [USDT_ADDRESS[ChainId.ARBITRUM]]:
      '0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641',
    [STARGATE_FRAX_ADDRESS[ChainId.ARBITRUM]]:
      '0xaa4BF442F024820B2C28Cd0FD72b82c63e66F56C',
    [STARGATE_MAI_ADDRESS[ChainId.ARBITRUM]]:
      '0xF39B7Be294cB36dE8c510e267B82bb588705d977',
  },
  [ChainId.FANTOM]: {
    [STARGATE_USDC_ADDRESS[ChainId.FANTOM]]:
      '0x12edeA9cd262006cC3C4E77c90d2CD2DD4b1eb97',
  },
}

export const STARGATE_BLOCK_CONFIRMATIONS = {
  [ChainId.ETHEREUM]: 15,
  [ChainId.BSC]: 20,
  [ChainId.AVALANCHE]: 12,
  [ChainId.POLYGON]: 512,
  [ChainId.ARBITRUM]: 20,
  [ChainId.OPTIMISM]: 20,
  [ChainId.FANTOM]: 5,
} as const

export const STARGATE_CONFIRMATION_SECONDS = {
  [ChainId.ETHEREUM]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.ETHEREUM] * 14,
  [ChainId.BSC]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.BSC] * 3,
  [ChainId.AVALANCHE]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.AVALANCHE] * 3,
  [ChainId.POLYGON]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.POLYGON] * 3,
  [ChainId.ARBITRUM]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.ARBITRUM] * 15,
  [ChainId.OPTIMISM]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.OPTIMISM] * 13,
  [ChainId.FANTOM]: STARGATE_BLOCK_CONFIRMATIONS[ChainId.FANTOM] * 2,
} as const

export function isStargateBridgeToken(currency: Type | undefined) {
  if (!currency) return false
  if (!STARGATE_BRIDGE_TOKEN_ADDRESSES[currency.chainId]) return false
  return STARGATE_BRIDGE_TOKEN_ADDRESSES?.[currency.chainId]?.includes(
    currency.wrapped.address,
  )
}

export const STARGATE_TOKEN = new Token({
  chainId: ChainId.ETHEREUM,
  address: '0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6',
  decimals: 18,
  symbol: 'STG',
  name: 'StargateToken',
})

export type StargateBridgeTokens =
  typeof STARGATE_BRIDGE_TOKENS[StargateChainId]

export type StargateBridgeToken = StargateBridgeTokens[number]

export const STARGATE_SUPPORTED_CHAIN_IDS = [
  ChainId.ETHEREUM,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.POLYGON,
  // ChainId.FANTOM,
  ChainId.BSC,
  ChainId.OPTIMISM,
] as const

export type StargateChainId = typeof STARGATE_SUPPORTED_CHAIN_IDS[number]
