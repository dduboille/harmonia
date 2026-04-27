/**
 * lib/supabase.ts
 * Harmonia — Client Supabase avec initialisation lazy
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Client public (browser)
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Client serveur lazy
let _admin: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!_admin) {
    _admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
  }
  return _admin;
}

export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getSupabaseAdmin() as any)[prop];
  },
});

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