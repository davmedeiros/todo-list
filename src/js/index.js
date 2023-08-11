import 'normalize.css';
import '../css/style.css';
import { Todo } from './todo';
import { getProjects, createProject } from './project';
import { populateAside } from './dom';

// get a list of projects and populate aside with it
// ...
createProject('Work');
populateAside(getProjects());