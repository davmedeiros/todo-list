const aside = document.querySelector('aside');

const showProjectCreationMenu = () => {
    const newProject = document.createElement('div');
    const title = document.createElement('input');
    title.placeholder = 'new project...';
    title.id = 'project-name';
    newProject.appendChild(title);
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