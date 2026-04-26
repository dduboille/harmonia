/**
 * lib/supabase.ts
 * Harmonia — Client Supabase
 * Utilise service_role côté serveur pour bypass RLS
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl      = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client public (browser) — limité par RLS
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Client serveur avec service_role — accès complet (Server Components / API routes uniquement)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// Types
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
