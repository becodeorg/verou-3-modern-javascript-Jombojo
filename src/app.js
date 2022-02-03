import component from './component.js';
import { DateTime } from "luxon";

const now = DateTime.now();
console.log(now);

document.body.appendChild(component());