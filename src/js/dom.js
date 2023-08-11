import checkCircleOutline from '../images/check-circle-outline.svg';

const aside = document.querySelector('aside');

const showProjectCreationMenu = () => {
    const newProject = document.createElement('div');
    newProject.id = 'new-project-menu';
    const title = document.createElement('input');
    title.placeholder = 'new project...';
    title.id = 'project-name';
    const submit = document.createElement('img');
    submit.src = checkCircleOutline;
    submit.id = 'confirm-project';
    // submit.addEventListener('click', createProject);
    newProject.appendChild(title);
    newProject.appendChild(submit);
    aside.appendChild(newProject);
}

const populateAside = (projects) => {
    const addProject = document.querySelector('#show-project-creation-menu');
    addProject.addEventListener('click', showProjectCreationMenu);
    const projectTabs = document.querySelector('#project-tabs');

    projects.forEach(project => {
        const title = document.createElement('p');
        title.textContent = project.name;
        projectTabs.appendChild(title);
    });
    
    aside.appendChild(projectTabs);
}

export { populateAside };