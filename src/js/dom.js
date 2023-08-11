const populateAside = (projects) => {
    const aside = document.querySelector('aside');
    const projectTabs = document.querySelector('#project-tabs');

    projects.forEach(project => {
        const title = document.createElement('p');
        title.textContent = project.name;
        projectTabs.appendChild(title);
    });
    
    aside.appendChild(projectTabs);
}

export { populateAside };