import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nnuxbvcoqtjztryyofvv.supabase.co";
const supabasePublishableKey = "sb_publishable_cmuRgvNGi4FidV9Fc9yf-g_EJuSDJ9i";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);