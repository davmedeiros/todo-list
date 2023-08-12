const Project = (name, items = []) => {
    const addItem = (item) => {
        items.push(item)
    }

    return {  name, items, addItem };
}

let projects = [];

// TODO: Store the items properly somehow
const saveToLocalStorage = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
}

const loadFromLocalStorage = () => {
    let tempProjects = [];
    tempProjects = JSON.parse(localStorage.getItem("projects") || "[]");

    tempProjects.forEach(tempProject => {
        createProject(tempProject.name, tempProject.items);
    });
}

const createProject = (name, items) => {
    projects.push(Project(name, items));
    saveToLocalStorage();
}

loadFromLocalStorage();

const getProjects = () => {
    projects.length === 0 && createProject('Daily');
    return projects;
}

export { getProjects, createProject };