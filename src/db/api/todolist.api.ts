import { db } from "../firebase";
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore/lite';
import List from "../interfaces/list.interface";

const listCollectionRef = collection(db, "todolist");

export const createList = async (uid: string, listname: any): Promise<List> => {
    try {
        const payload = {
            createdBy: uid,
            name: listname,
            createdAt: new Date().toUTCString()
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
        const lists: any[] = []
        querySnapshot.forEach((doc) => {
            lists.push({ uid: doc.id, ...doc.data() })
        });
        return lists;
    } catch (error: any) {
        throw error.code;
    }
}