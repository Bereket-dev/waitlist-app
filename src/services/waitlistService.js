import { db } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Function to check if email exists
export async function checkEmailExists(email) {
  try {
    const q = query(collection(db, "waitlist"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    return !querySnapshot.empty; // true if exists
  } catch (error) {
    console.error("Error checking email existence:", error);
    return false;
  }
}

//  Function to add email (with existence check)
export async function addEmailToWaitlist(email) {
  try {
    // check first
    const exists = await checkEmailExists(email);
    if (exists) {
      return { success: false, error: "Email already registered" };
    }

    // if not exists → add new doc
    await addDoc(collection(db, "waitlist"), {
      email,
      createdAt: serverTimestamp(),
    });

    return { success: true };
  } catch (error) {
    console.error("Error adding email: ", error);
    return { success: false, error };
  }
}
