import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodmeal-d549f-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const responseData = await response.json();

      if (responseData === null) {
        throw new Error("Meals not present.");
      }

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loadingMeals}>
        <p>Loading......</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.errorMeals}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsLists = meals.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsLists}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
