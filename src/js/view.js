import { getProjects, createProject, saveToLocalStorage, loadFromLocalStorage } from "./project";
import { createTodo } from "./todo";

const CONFIRM_SYMBOL = '\u2713';
const projectsView = document.querySelector('#projects');

const showProjectNameHeading = (projectName) => {
    const projectNameHeading = document.querySelector('#project-name');
    projectNameHeading.textContent = projectName;
}

const clearContainer = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const showTodoList = (todoList) => {
    const todoListView = document.querySelector('#todo-list');
    clearContainer(todoListView);

    todoList.forEach(todo => {
        const todoView = document.createElement('li');
        todoView.classList.add('todo');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        title.textContent = todo.title;
        description.textContent = todo.description;
        dueDate.textContent = todo.dueDate;
        priority.textContent = todo.priority;
        todoView.appendChild(title);
        todoView.appendChild(description);
        todoView.appendChild(dueDate);
        todoView.appendChild(priority);
        todoListView.appendChild(todoView);
    });
}

const showProjectView = (project) => {
    showProjectNameHeading(project.name);
    showTodoList(project.items);
}

const submitTodoView = (title, description, dueDate, priority) => {
    const todo = createTodo(title, description, dueDate, priority);
    const projects = getProjects();
    const activeProject = document.querySelector('.active-project');
    const index = activeProject ? activeProject.dataset.numberIndex : 0;
    projects[index].addItem(todo);
    saveToLocalStorage();
    showProjectView(projects[index]);
}

const showNewTodoView = () => {
    const main = document.querySelector('main');
    const newTodoView = document.createElement('div');
    newTodoView.id = 'new-todo-view';

    const values = ['title', 'description', 'dueDate', 'priority'];
    const fields = [];

    values.forEach(value => {
        const container = document.createElement('div');
        const label = document.createElement('label');
        label.htmlFor = `todo-${value}`;
        label.textContent = value;
        const input = document.createElement('input');

        switch (value) {
            case values[2]:
                input.type = 'date';
                break;
            case values[3]:
                input.type = 'number';
                break;    
            default:
                input.type = value;
                break;
        }

        input.id = `todo-${value}`;
        container.appendChild(label)
        container.appendChild(input)
        newTodoView.appendChild(container);
        fields.push(input);
    });

    const submitTodo = document.createElement('button');
    submitTodo.type = 'button';
    submitTodo.textContent = CONFIRM_SYMBOL;
    
    submitTodo.addEventListener('click', () => {
        submitTodoView(fields[0].value, fields[1].value, fields[2].value, fields[3].value);
        newTodoView.remove();
    })

    newTodoView.appendChild(submitTodo);
    main.appendChild(newTodoView);
}

const showProjectsView = (projects) => {
    projects.forEach((project, index) => {
        const projectView = document.createElement('div');
        projectView.classList.add('project');
        projectView.dataset.numberIndex = index;

        projectView.addEventListener('click', () => {
            const actives = document.querySelectorAll('.active-project');
            actives.forEach(active => {
                active.classList.remove('active-project');
            });
            projectView.classList.add('active-project')
            showProjectView(project);
        });
            
        const projectName = document.createElement('p');
        projectName.classList.add('project-name');
        projectName.textContent = project.name;
        projectView.appendChild(projectName);
        projectsView.appendChild(projectView);
    });
}

const submitProjectView = (projectName) => {
    createProject(projectName);
    saveToLocalStorage();
    clearContainer(projectsView);
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

const addDefaultEventListeners = () => {
    const addProject = document.querySelector('#add-project');
    addProject.addEventListener('click', showNewProjectView);
    const addTodo = document.querySelector('#add-todo');
    addTodo.addEventListener('click', showNewTodoView);
}

const render = () => {
    loadFromLocalStorage();
    const projects = getProjects();
    showProjectsView(projects);
    showProjectView(projects[0]);
    addDefaultEventListeners();
}

export { render };