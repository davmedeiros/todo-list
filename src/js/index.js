import 'normalize.css';
import '../css/style.css';
import { Todo } from './todo';
import { getProjects, createProject } from './project';
import { populateAside } from './dom';

populateAside(getProjects());