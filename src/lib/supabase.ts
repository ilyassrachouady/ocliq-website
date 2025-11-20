import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// If environment variables are missing, export a harmless mock client so the app
// can run in dev mode without connecting to Supabase. This avoids throwing an
// error at module import time.
let supabase: any;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Minimal mock that supports the `.from(table).insert(data)` shape used in the
  // codebase. It returns a resolved promise like the real client: { data, error }.
  supabase = {
    from: (_table: string) => ({
      insert: async (_payload: any) => ({ data: null, error: null }),
      select: async () => ({ data: null, error: null }),
    }),
  };
}

export { supabase };

export type Lead = {
  id?: string;
  full_name: string;
  phone_number: string;
  email_address: string;
  business_info?: string;
  submission_timestamp?: string;
  created_at?: string;
};