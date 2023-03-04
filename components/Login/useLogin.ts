import { auth } from "@/firebase/clientApp";
type formType = {
  email : string,
  password: string
}

// Handle sign in
export const handleSignIn = async (formData : formType) => {
  const {email, password} = formData;
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log("Signed in user:", user);
  } catch (error: any) {
    console.error("Error signing in:", error.message);
  }
};

// Handle sign out
export const handleSignOut = async () => {
  try {
    await auth.signOut();
    console.log("Signed out");
  } catch (error: any) {
    console.error("Error signing out:", error.message);
  }
};

// Get current user
export const currentUser = auth.currentUser;
console.log("Current user:", currentUser);
