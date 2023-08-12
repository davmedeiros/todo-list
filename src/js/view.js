import { getProjects, createProject } from "./project";
import { createTodo } from "./todo";

const CONFIRM_SYMBOL = '\u2713';
const projectsView = document.querySelector('#projects');

const clearProjectsView = () => {
    while (projectsView.firstChild) {
        projectsView.removeChild(projectsView.firstChild);
    }
}

const showProjectsView = (projects) => {
    projects.forEach(project => {
        const projectView = document.createElement('div');
        projectView.classList.add('project');
        const projectName = document.createElement('p');
        projectName.classList.add('project-name');
        projectName.textContent = project.name;
        projectView.appendChild(projectName);
        projectsView.appendChild(projectView);
    });
}

const submitProjectView = (projectName) => {
    createProject(projectName);
    clearProjectsView();
    showProjectsView(getProjects());
}

const showNewProjectView = () => {
    const newProjectView = document.createElement('div');
    newProjectView.id = 'new-project-view';
    const projectName = document.createElement('input');
    const submitProject = document.createElement('button');
    submitProject.id = 'submit-project';
    submitProject.textContent = CONFIRM_SYMBOL;

    submitProject.addEventListener('click', () => {
        submitProjectView(projectName.value);
    });

    projectName.addEventListener("keypress", function (event) {
        event.key === 'Enter' && submitProject.click();
    });

    newProjectView.appendChild(projectName);
    newProjectView.appendChild(submitProject);
    projectsView.appendChild(newProjectView);
    projectName.focus();
}

const showProjectNameHeading = (projectName) => {
    const projectNameHeading = document.querySelector('#project-name');
    projectNameHeading.textContent = projectName;
}

const showTodoList = (todoList) => {
    const todoListView = document.querySelector('#todo-list');

    todoList.forEach(todo => {
        const todoView = document.createElement('li');
        todoView.classList.add('todo');
        todoListView.textContent = todo.title;
        todoListView.appendChild(todoView);
    });
}

const showProjectView = (project) => {
    showProjectNameHeading(project.name);
    showTodoList(project.items);
}

const submitTodoView = (todo) => {
    console.log(todo);
}

const showNewTodoView = (clicked) => {
    const main = document.querySelector('main');
    const newTodoView = document.createElement('div');
    newTodoView.id = 'new-todo-view';

    const fields = ['title', 'description', 'dueDate', 'priority'];

    fields.forEach(field => {
        const container = document.createElement('div');
        const label = document.createElement('label');
        label.htmlFor = `todo-${field}`;
        label.textContent = field;
        const input = document.createElement('input');
        input.type = field;
        input.id = `todo-${field}`;
        container.appendChild(label)
        container.appendChild(input)
        newTodoView.appendChild(container);
    });

    const submitTodo = document.createElement('button');
    submitTodo.type = 'button';
    submitTodo.textContent = CONFIRM_SYMBOL;
    
    submitTodo.addEventListener('click', () => {
        submitTodoView('ok');
    })

    newTodoView.appendChild(submitTodo);
    main.appendChild(newTodoView);
    clicked.target.removeEventListener('click', showNewTodoView);
}

const addDefaultEventListeners = () => {
    const addProject = document.querySelector('#add-project');
    addProject.addEventListener('click', showNewProjectView);
    const addTodo = document.querySelector('#add-todo');
    addTodo.addEventListener('click', showNewTodoView);
}

const render = () => {
    const projects = getProjects();
    showProjectsView(projects);
    showProjectView(projects[0]);
    addDefaultEventListeners();
}

export { render };