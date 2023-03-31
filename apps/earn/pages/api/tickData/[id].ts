import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

import { getAllV3Ticks } from '../../../lib/api'

const schema = z.object({
  id: z.string(),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')

  const result = schema.safeParse(req.query)
  if (!result.success) {
    return res.status(400).json(result.error.format())
  }

  const pool = await getAllV3Ticks(result.data.id)
  res.status(200).json(pool)
}
