import { db } from "../firebase";
import { addDoc, collection, query, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore/lite';
import Todo from "../interfaces/todo.interface";

const listDb = "todolist";
const todoDb = "todos";
// TodoDB is a sub collection to listDB

export const getListInfo = async (listId: string): Promise<any> => {
    try {
        const docRef = doc(db, listDb, listId);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        return data
    } catch (error: any) {
        throw error;
    }
}

export const getListTodos = async (listId: string): Promise<Todo[]> => {
    try {
        const listTodoCollection = collection(db, listDb, listId, 'todos')
        const q = query(listTodoCollection);
        const querySnapshot = await getDocs(q);
        const todos: any[] = []
        querySnapshot.forEach((doc) => {
            todos.push({ uid: doc.id, ...doc.data() })
        });

        return todos;
    } catch (error: any) {
        throw error;
    }
}

export const createTodo = async (listId: string, todo: string): Promise<Todo> => {
    try {
        const listTodoCollection = collection(db, listDb, listId, todoDb)
        const payload = {
            todo,
            completed: false,
            important: false,
            createdAt: new Date().getTime()
        }
        const docRef = await addDoc(listTodoCollection, payload)
        return { ...payload, uid: docRef.id }
    } catch (error: any) {
        throw error;
    }
}

export const deleteTodo = async (listId: string, todoId: string) => {
    try {
        await deleteDoc(doc(db, listDb, listId, todoDb, todoId))
    } catch (error: any) {
        throw error;
    }
}