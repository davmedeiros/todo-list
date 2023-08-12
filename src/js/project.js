const Project = (name, items = []) => {
    const addItem = (item) => {
        items.push(item)
    }

    return {  name, items, addItem };
}

let projects = [];

const saveToLocalStorage = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
}

const loadFromLocalStorage = () => {
    projects = JSON.parse(localStorage.getItem("projects") || "[]");
}

const createProject = (name, ...items) => {
    projects.push(Project(name, items));
    saveToLocalStorage();
}

const getProjects = () => {
    loadFromLocalStorage();
    projects.length === 0 && createProject('Daily');
    return projects;
}

export { getProjects, createProject };