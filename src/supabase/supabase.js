import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vmseqndkbanodnuzhwwt.supabase.co";


export const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtc2VxbmRrYmFub2RudXpod3d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NDM4MDQsImV4cCI6MjA1NDMxOTgwNH0.GOC4UjTezFcfZss9BdKekAfIVpRE_DEst0PV1dG4nzY",
  {
    auth: {
      storage: localStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);