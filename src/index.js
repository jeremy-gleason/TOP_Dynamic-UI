import { Dropdown } from "./Dropdown";
import { MobileMenu } from "./MobileMenu";

const root = document.getElementById('root');
const navBar = document.createElement('nav');
root.appendChild(navBar);

MobileMenu(navBar);
