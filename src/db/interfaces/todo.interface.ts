export default interface Todo {
    uid: string;
    todo: string;
    completed: boolean;
    important: boolean;
    createdAt: number;
}