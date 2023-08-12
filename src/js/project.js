const Project = (name, items = []) => {
    const addItem = (item) => {
        items.push(item)
    }

    return {  name, items, addItem };
}

const projects = [Project('Daily')];

const createProject = (name, ...items) => {
    projects.push(Project(name, items));
}

const getProjects = () => {
    return projects;
}

export { getProjects, createProject };