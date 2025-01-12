import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://faviyfcikgckhmjjdgpg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhdml5ZmNpa2dja2htampkZ3BnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NDY2NzUsImV4cCI6MjA1MDAyMjY3NX0.84lLlG2tYpUQNlFwTm2RsuJKHg_WVcgVghtjMSIyKeo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;