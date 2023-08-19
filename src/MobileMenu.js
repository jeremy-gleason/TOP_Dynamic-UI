import { Dropdown } from "./Dropdown";

const MobileMenu = (parent) => {
  const navList = document.createElement('ul');
  parent.appendChild(navList);

  addListItem(navList, 'News', '', 'M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z');

  addListItem(navList, 'Videos', '', 'M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M10 16V8L15 12');

  addListItem(navList, 'Photos', '', 'M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6');

  addListItem(navList, 'Chat', '', 'M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z');

  addListItem(navList, 'More', 'more', 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z');

  Dropdown(parent, '', ['Statistics', 'Settings', 'About', 'Contact']);

  const listItems = document.querySelectorAll('li');
  const dropDown = document.querySelector('ul.dropdown');

  for (const listItem of listItems) {
    if (!listItem.classList.contains('dropdown')) {
      listItem.addEventListener('click', (e) => {
        for (const lstItem of listItems) {
          if (!lstItem.classList.contains('dropdown')) {
            lstItem.firstChild.firstChild.setAttribute('fill', '#878787');
            lstItem.classList.remove('active');
          }
        }
        e.currentTarget.firstChild.firstChild.setAttribute('fill', '#000000');
        e.currentTarget.classList.add('active');
        if (e.currentTarget.id && e.currentTarget.id === 'more' && dropDown.classList.contains('hidden')) {
          dropDown.classList.remove('hidden');
        } else {
          dropDown.classList.add('hidden');
        }
      });
    }
  }

};

const addListItem = (parent, header, id, svgPath) => {
  const listItem = document.createElement('li');
  const itemSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const itemSvgPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  itemSvg.setAttribute('width', '28');
  itemSvg.setAttribute('height', '28');
  itemSvgPath.setAttribute('d', svgPath);
  itemSvgPath.setAttribute('fill', '#878787');
  const itemText = document.createElement('p');
  itemText.textContent = header;
  parent.appendChild(listItem);
  listItem.appendChild(itemSvg);
  itemSvg.appendChild(itemSvgPath);
  listItem.appendChild(itemText);
  if (id) {
    listItem.id = id;
  }
};

export { MobileMenu };