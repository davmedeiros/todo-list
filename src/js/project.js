const Project = (name, items = []) => {
    const addItem = (item) => {
        items.push(item)
    }

    return {  name, items, addItem };
}

let projects = [];

const saveToLocalStorage = () => {
    const projectNames = [];

    projects.forEach(project => {
        projectNames.push(project.name);
        const items = project.items;
        localStorage.setItem(project.name, JSON.stringify(items));
    });
    
    localStorage.setItem("projects", JSON.stringify(projectNames));
}

const loadFromLocalStorage = () => {
    let projectNames = [];
    projectNames = JSON.parse(localStorage.getItem("projects") || "[]");

    projectNames.forEach(projectName => {
        const items = JSON.parse(localStorage.getItem(projectName) || "[]");
        createProject(projectName, items);
    });
}

const createProject = (name, items) => {
    projects.push(Project(name, items));
}

const getProjects = () => {
    projects.length === 0 && createProject('Daily');
    return projects;
}

export { getProjects, createProject, saveToLocalStorage, loadFromLocalStorage };