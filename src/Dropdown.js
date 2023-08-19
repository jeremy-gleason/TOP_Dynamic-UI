const Dropdown = (parent, title, items) => {
  const menu = document.createElement("ul");
  menu.classList.add('dropdown');
  menu.classList.add('hidden');
  if (title) {
    const dropDown = document.createElement("div");
    const h2Title = document.createElement("h2");
    h2Title.textContent = title;
    parent.appendChild(dropDown);
    dropDown.appendChild(h2Title);
    dropDown.appendChild(menu);
  } else {
    parent.appendChild(menu);
  }

  for (const item of items) {
    const menuItem = document.createElement("li");
    menuItem.classList.add('dropdown');
    menuItem.textContent = item;
    menu.appendChild(menuItem);
  }
  
  const toggleMenu = (e) => {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }
  
  if (title) {
    dropDown.addEventListener('mouseover', (e) => {
      menu.classList.remove('hidden');
    });
  
    dropDown.addEventListener('mouseout', (e) => {
      menu.classList.add('hidden');
    });
  }
}

export { Dropdown };