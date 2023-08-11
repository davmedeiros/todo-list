const Project = (name, items = []) => {
    return { name, items };
}

const projects = [Project('Home')];

const getProjects = () => {
    return projects;
}

const createProject = (name, items = []) => {
    projects.push(Project(name, ...items))
}

export { getProjects, createProject };