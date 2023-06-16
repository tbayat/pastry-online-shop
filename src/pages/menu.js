import CakesMenu from "../components/cakesmenu";
import menu from "../components/data/menu.json";

function Menu() {
  return <CakesMenu cakes={menu} />;
}

export default Menu;
