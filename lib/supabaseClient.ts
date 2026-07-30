import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
	process.env.NEXT_PUBLIC_SUPABASE_URL ||
	"https://dismivwflmiuojhwoxlw.supabase.co";
const supabaseKey =
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
	process.env.SUPABASE_SERVICE_ROLE_KEY ||
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy";

export const supabase = createClient(supabaseUrl, supabaseKey);
