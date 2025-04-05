// import { createClient } from "@supabase/supabase-js";

// const SUPABASE_URL = "https://psotahcvbyzuzsbbbspn.supabase.co";
// const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzb3RhaGN2Ynl6dXpzYmJic3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMDI4NTYsImV4cCI6MjA1ODc3ODg1Nn0.j5Clpe7mNSgcs1mmnQvznWAtT52BXAoMJSWffLecQ7s";

// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// export const signUp = async (email, password) => {
//     const { user, error } = await supabase.auth.signUp({
//       email,
//       password,
//     });
//     return { user, error };
//   };
  
//   // Sign in function
//   export const signIn = async (email, password) => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     return { user : data?.user, error };
//   };



  import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
