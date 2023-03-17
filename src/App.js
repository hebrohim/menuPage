import menuList from "./Data";
import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";
import Categories from "./components/Categories";
function App() {
  const [menuLists, setMenuLists] = useState(menuList);

  const filter = (category) => {
    let sameCategory = menuList.filter(
      (singleCategory) => singleCategory.category === category
    );

    setMenuLists(sameCategory);
    if (category === "All") {
      setMenuLists(menuList);
    }
  };
  return (
    <div className="App">
      <header>
        <h3 id="our_menuText">Our Menu</h3>
        <div id="underline"></div>
        <Categories menuList={menuList} filter={filter} />
      </header>
      <div className="cardContainer">
      {menuLists.map((menu) => (
        <Menu key={menu.id} menuList={menu} />
      ))}
</div>

    </div>
  );
}

export default App;
