import Todo from '../../../db/interfaces/todo.interface'

export function sortTodos(alltodos: Todo[]) {
    const completed: Todo[] = [];
    const incomplete: Todo[] = [];
    for (let i = 0; i < alltodos.length; i++) {
        alltodos[i].completed
            ? completed.push(alltodos[i])
            : incomplete.push(alltodos[i]);
    }
    return [completed, incomplete];
}