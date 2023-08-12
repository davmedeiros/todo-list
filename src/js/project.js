const Project = (name, items = []) => {
    return {  name, items };
}

const projects = [Project('Daily')];

const createProject = (name, ...items) => {
    projects.push(Project(name, items));
}

const getProjects = () => {
    return projects;
}

export { getProjects, createProject };