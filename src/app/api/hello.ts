import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string;
  age: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    "name": "John Doe",
    "age": 26
  })
}
