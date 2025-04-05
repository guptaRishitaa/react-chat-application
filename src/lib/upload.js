// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from "./firebase";

// const upload = async (file) => {
//   const date = new Date();
//   const storageRef = ref(storage, `images/${date + file.name}`);

//   const uploadTask = uploadBytesResumable(storageRef, file);

//   return new Promise((resolve, reject) => {
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log("Upload is " + progress + "% done");
//       },
//       (error) => {
//         reject("Something went wrong!" + error.code);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           resolve(downloadURL);
//         });
//       }
//     );
//   });
// };

// export default upload;

import { supabase } from "./supabase"; // Import Supabase

const upload = async (file) => {
  if (!file) return null;

  const filePath = `${Date.now()}-${file.name}`; // Unique file path

  const { data, error } = await supabase.storage.from("avatars").upload(filePath, file);

  if (error) {
    throw new Error("Upload failed: " + error.message);
  }

  // Get the public URL
  const { data: publicUrl } = supabase.storage.from("avatars").getPublicUrl(filePath);
  
  return publicUrl.publicUrl; // Return URL for use in Firestore
};

export default upload;


// import { supabase } from "./supabase";

// const uploadImage = async (file) => {
//   if (!file) return null;

//   const filePath = `images/${Date.now()}-${file.name}`;

//   const { data, error } = await supabase.storage
//     .from("images") // Ensure "avatars" bucket exists in Supabase
//     .upload(filePath, file);

//   if (error) throw error;

//   // Get public URL
//   const { data: urlData } = await supabase.storage.from("images").getPublicUrl(filePath);

//   return urlData.publicUrl;
// };

// export default uploadImage;

