import classes from "./Header.module.css";
import mealsImage from "../../asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h2>Food Meals</h2>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delicious food on table" />
      </div>
    </>
  );
};

export default Header;
