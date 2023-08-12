const Todo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
}

const createTodo = (title, description, dueDate, priority) => {
    return Todo(title, description, dueDate, priority);
}

export { createTodo };