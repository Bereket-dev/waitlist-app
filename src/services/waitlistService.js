// services/waitlistService.js
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function addEmailToWaitlist(email) {
  try {
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
