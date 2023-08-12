const projects = document.querySelector('#projects');

const showNewProjectView = () => {
    const newProjectView = document.createElement('div');
    newProjectView.id = 'new-project-view';
    const projectName = document.createElement('input');
    const submitProject = document.createElement('button');
    submitProject.id = 'submit-project';
    submitProject.textContent = '\u2713'
    newProjectView.appendChild(projectName);
    newProjectView.appendChild(submitProject);
    projects.appendChild(newProjectView);
}

const addEventListeners = () => {
    const addProject = document.querySelector('#add-project');
    addProject.addEventListener('click', showNewProjectView);
}

const render = () => {
    // showNewProjectView();
    addEventListeners();
}

export { render };