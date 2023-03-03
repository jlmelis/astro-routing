import { createClient } from '@supabase/supabase-js';
import type { Database } from '../db_types';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supbaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supbaseAnonKey);