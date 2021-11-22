import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc, getDoc } from 'firebase/firestore/lite';
// collection, query, where, getDocs, 
// import { ref, set } from "firebase/database";
import { db } from "../firebase";
import { auth } from "../firebase";
// import { app } from "../../../firebase/firebase";

const userdb = "users"

export async function registerUser(user: any): Promise<string> {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        await addUserToDatabase(userCredential.user.uid, user);
        return 'signup/success';
    } catch (error: any) {
        return error.code;
    }
}

const addUserToDatabase = async (uid: string, user: any) => {
    try {
        await setDoc(doc(db, userdb, uid), {
            uid,
            name: user.name,
            email: user.email,
            profilepic: '',
            designation: user.designation
        });
        return true;
    } catch (error: any) {
        return error.code;
    }
}

// const getEmailAvailability = async (email: string): Promise<boolean> => {
//     const usersRef = collection(db, userdb);
//     const emailQuery = query(usersRef, where("email", "==", email));
//     const querySnapshot = await getDocs(emailQuery);
//     return Boolean(querySnapshot.size);
// }


export const loginUser = async (payload: any) => {
    try {
        const loginData = await signInWithEmailAndPassword(auth, payload.email, payload.password)
        const uid = loginData.user.uid;
        const docRef = doc(db, userdb, uid);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error: any) {
        return error.code;
    }
}

export async function logoutUser(): Promise<string> {
    try {
        await signOut(auth)
        localStorage.removeItem('taskm_user');
        return 'success'
    } catch (error: any) {
        return error.code;
    }
}