import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ldhkhvvqsuppygjbcqje.supabase.co';
const supabaseKey = process.env.SUPABASE_PUBLIC_API;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
