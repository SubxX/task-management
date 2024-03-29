import { db } from "../firebase";
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore/lite';
import List from "../interfaces/list.interface";

const listDb = "todolist";
const listCollectionRef = collection(db, listDb);

export const createList = async (uid: string, listname: any): Promise<List> => {
    try {
        const payload = {
            createdBy: uid,
            name: listname,
            createdAt: new Date().getTime()
        }
        const createdList = await addDoc(listCollectionRef, payload);
        return { ...payload, uid: createdList.id };
    } catch (error: any) {
        throw error.code;
    }
}

export const getUserLists = async (uid: string): Promise<List[]> => {
    try {
        const listsQuery = await query(listCollectionRef, where("createdBy", "==", uid));
        const querySnapshot = await getDocs(listsQuery);
        const lists = querySnapshot.docs.map((doc) => ({ uid: doc.id, ...doc.data() } as List));
        return lists.sort((a, b) => a.createdAt < b.createdAt ? -1 : 1)
    } catch (error: any) {
        throw error.code;
    }
}