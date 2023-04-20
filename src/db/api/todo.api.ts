import { db } from "../firebase";
import { addDoc, collection, query, getDocs, deleteDoc, doc, getDoc, collectionGroup, where, updateDoc } from 'firebase/firestore/lite';
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

type CreateTodoPayload = {
    todo: string;
    createdBy: string
}
export const createTodo = async (listId: string, tdPayload: CreateTodoPayload): Promise<Todo> => {
    try {
        const listTodoCollection = collection(db, listDb, listId, todoDb)
        const payload = {
            completed: false,
            important: false,
            createdAt: new Date().getTime(),
            list: listId,
            ...tdPayload
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

export const getImportantTodos = async (user_id: string): Promise<Todo[]> => {
    const todosQuery = query(collectionGroup(db, 'todos'), where("createdBy", '==', user_id), where('important', '==', true));
    const querySnapshot = await getDocs(todosQuery);
    const todos = querySnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() } as Todo));
    return todos
}

export type ToggleTodoImportancePayload = {
    listId: string
    todoId: string
    value: boolean
}
export const toggleTodoImportance = async (payload: ToggleTodoImportancePayload): Promise<boolean> => {
    const { listId, todoId, value } = payload
    const todoListRef = collection(db, listDb, listId, 'todos')
    const docRef = doc(todoListRef, todoId)
    await updateDoc(docRef, { important: value })
    return true
}