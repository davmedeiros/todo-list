const populateAside = (...projects) => {
    const aside = document.querySelector('aside');
    
    projects.forEach(project => {
        const title = document.createElement('p');
        title.textContent = project.name;
        aside.appendChild(title);
    });
}

export { populateAside };