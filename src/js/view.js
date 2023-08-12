import { getProjects, createProject } from "./project";

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
    submitProject.textContent = '\u2713';

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
}

const render = () => {
    showProjectsView(getProjects());
    addDefaultEventListeners();
}

export { render };