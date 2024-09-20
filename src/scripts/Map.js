function changeImage(region) {
  const mapImage = document.getElementById("mapImage");
  mapImage.src = `src/assets/Map/${region}.png`;
}


export default function MapNavigation() {
  const menuItems = [
    { id: "All", label: "Все" },
    { id: "Moscow", label: "Москва" },
    { id: "Center", label: "Центр" },
    { id: "Northwest", label: "Северо-Запад" },
    { id: "South", label: "Юг" },
    { id: "Volga", label: "Волга" },
    { id: "Ural", label: "Урал" },
    { id: "Siberia", label: "Сибирь" },
    { id: "FarEast", label: "Дальний восток" }
  ];

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.id = "map_header_nav__ul";

  menuItems.forEach(item => {
    const li = document.createElement("li");
    li.id = item.id;
    li.textContent = item.label;
    li.onclick = () => changeImage(item.id);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  document.querySelector(".map_header_nav").appendChild(nav);
}


