import Todo from '../../../db/interfaces/todo.interface'

export function sortTodos(alltodos: Todo[]): any {
    const completed = [];
    const incomplete = [];
    for (let i = 0; i < alltodos.length; i++) {
        alltodos[i].completed
            ? completed.push(alltodos[i])
            : incomplete.push(alltodos[i]);
    }
    return [completed, incomplete];
}