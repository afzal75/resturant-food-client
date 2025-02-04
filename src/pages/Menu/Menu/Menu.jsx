import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Food | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Todays Offer"
      ></SectionTitle>
      {/* offered menu */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu  */}
      <MenuCategory
        items={desserts}
        title="Desserts"
        coverImg={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizzas}
        title="Pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salads}
        title="Salad"
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soups}
        title="Soup"
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
