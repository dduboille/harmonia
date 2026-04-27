import { createClient } from "@supabase/supabase-js";

const supabaseUrl     = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

let _admin: ReturnType<typeof createClient> | null = null;

export function getSupabaseAdmin() {
  if (!_admin) {
    _admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
  }
  return _admin;
}

// Garde la compatibilité avec le code existant
export const supabaseAdmin = {
  from: (table: string) => getSupabaseAdmin().from(table),
};

export interface UserProgress {
  id?: string;
  user_id: string;
  exercise_id: string;
  cours_id: number;
  exercise_type: string;
  completed: boolean;
  score: number;
  attempts: number;
  last_seen_at?: string;
  created_at?: string;
}

export interface UserSubscription {
  user_id: string;
  plan: "free" | "pro" | "annual";
  stripe_customer_id?: string;
  current_period_end?: string;
}