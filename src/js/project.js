const Project = (name, items = []) => {
    return { name, items };
}

const defaultProject = Project('Default');

export { Project, defaultProject };