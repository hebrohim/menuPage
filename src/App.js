import menuList from "./Data"

import Menu from "./components/Menu";
import "./App.css"
function App() {
  return (
    <div className="App">
      <h3 id = "our_menuText">Our Menu</h3>
      <div id ="underline"></div>
      {menuList.map((menu)=><Menu key={menu.id} menuList = {menu}/>)}
     
    </div>
  );
}

export default App;
