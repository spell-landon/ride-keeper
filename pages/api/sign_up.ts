// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/utils';

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email, password } = req.body;
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  res.status(200).json({ name: 'John Doe' });
};

export default handler;
