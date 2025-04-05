import { doc, getDoc } from 'firebase/firestore';
import {create} from 'zustand'
import { db } from './firebase';
 
export const useUserStore = create((set) => ({
    currentUser: null,
    isLoading :true,
    fetchUserInfo : async (uid, retries = 6, delay = 500) =>{
        if(!uid) return set({currentUser:null, isLoading:false});

        try {
            const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      }
      else if (retries > 0) {
        // Retry after a delay if user doc doesn't exist yet
        setTimeout(() => {
          useUserStore.getState().fetchUserInfo(uid, retries - 1, delay);
        }, delay);
      } 
       else {
        set({ currentUser: null, isLoading: false });
      }
        } catch (err) {
            console.log(err)
            return set({currentUser:null, isLoading:false})
        }
    }
}))

// import { create } from "zustand";
// import { supabase } from "./supabase";

// export const useUserStore = create((set) => ({
//   currentUser: null,
//   isLoading: true,

//   fetchUserInfo: async (uid) => {
//     if (!uid) return set({ currentUser: null, isLoading: false });

//     try {
//       const { data, error } = await supabase.from("users").select("*").eq("id", uid).single();

//       if (error) {
//         console.error("Error fetching user:", error);
//         return set({ currentUser: null, isLoading: false });
//       }

//       set({ currentUser: data, isLoading: false });
//     } catch (err) {
//       console.log(err);
//       return set({ currentUser: null, isLoading: false });
//     }
//   },
// }));
