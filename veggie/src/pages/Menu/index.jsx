import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./index.module.css";
import decoration from "../../assets/decoration.png";
import MenuItem from "./MenuItem";

const data = [
  // Starters
  {
    id: 1,
    name: "Smoked ricotta terrine",
    ingredients: "ricotta, shallots, cheddar, capers",
    price: 12,
    type: "starters",
  },
  {
    id: 2,
    name: "Tomato bruschetta",
    ingredients: "tomato, basil, olive oil, garlic",
    price: 8,
    type: "starters",
  },
  {
    id: 3,
    name: "Stuffed mushrooms",
    ingredients: "mushrooms, breadcrumbs, garlic, parsley",
    price: 10,
    type: "starters",
  },
  {
    id: 4,
    name: "Prawn cocktail",
    ingredients: "prawns, lettuce, cocktail sauce, lemon",
    price: 15,
    type: "starters",
  },
  {
    id: 5,
    name: "Caprese salad",
    ingredients: "mozzarella, tomato, basil, balsamic",
    price: 9,
    type: "starters",
  },
  {
    id: 6,
    name: "Chicken liver pâté",
    ingredients: "chicken liver, butter, onions, brandy",
    price: 14,
    type: "starters",
  },
  {
    id: 7,
    name: "French onion soup",
    ingredients: "onions, beef broth, cheese, croutons",
    price: 11,
    type: "starters",
  },
  {
    id: 8,
    name: "Garlic bread",
    ingredients: "bread, garlic, butter, parsley",
    price: 6,
    type: "starters",
  },
  {
    id: 9,
    name: "Caesar salad",
    ingredients: "lettuce, croutons, parmesan, caesar dressing",
    price: 10,
    type: "starters",
  },
  {
    id: 10,
    name: "Spring rolls",
    ingredients: "cabbage, carrot, noodles, soy sauce",
    price: 8,
    type: "starters",
  },

  // Mains
  {
    id: 11,
    name: "Grilled salmon",
    ingredients: "salmon, lemon, dill, olive oil",
    price: 20,
    type: "mains",
  },
  {
    id: 12,
    name: "Beef steak",
    ingredients: "beef, salt, pepper, garlic butter",
    price: 25,
    type: "mains",
  },
  {
    id: 13,
    name: "Chicken Alfredo pasta",
    ingredients: "chicken, pasta, cream, parmesan",
    price: 18,
    type: "mains",
  },
  {
    id: 14,
    name: "Vegetable stir-fry",
    ingredients: "broccoli, bell peppers, soy sauce, tofu",
    price: 16,
    type: "mains",
  },
  {
    id: 15,
    name: "Margherita pizza",
    ingredients: "dough, tomato sauce, mozzarella, basil",
    price: 14,
    type: "mains",
  },
  {
    id: 16,
    name: "Fish and chips",
    ingredients: "fish, potatoes, tartar sauce, peas",
    price: 17,
    type: "mains",
  },
  {
    id: 17,
    name: "Lamb curry",
    ingredients: "lamb, curry spices, yogurt, cilantro",
    price: 22,
    type: "mains",
  },
  {
    id: 18,
    name: "Vegan burger",
    ingredients: "vegan patty, lettuce, tomato, vegan mayo",
    price: 15,
    type: "mains",
  },
  {
    id: 19,
    name: "Risotto",
    ingredients: "rice, mushrooms, parmesan, white wine",
    price: 19,
    type: "mains",
  },
  {
    id: 20,
    name: "BBQ ribs",
    ingredients: "pork ribs, BBQ sauce, coleslaw, cornbread",
    price: 23,
    type: "mains",
  },

  // Desserts
  {
    id: 21,
    name: "Chocolate lava cake",
    ingredients: "chocolate, butter, eggs, sugar",
    price: 10,
    type: "desserts",
  },
  {
    id: 22,
    name: "Cheesecake",
    ingredients: "cream cheese, biscuits, sugar, vanilla",
    price: 9,
    type: "desserts",
  },
  {
    id: 23,
    name: "Apple pie",
    ingredients: "apples, pastry, cinnamon, sugar",
    price: 8,
    type: "desserts",
  },
  {
    id: 24,
    name: "Tiramisu",
    ingredients: "mascarpone, coffee, ladyfingers, cocoa",
    price: 12,
    type: "desserts",
  },
  {
    id: 25,
    name: "Ice cream sundae",
    ingredients: "ice cream, chocolate sauce, nuts, cherry",
    price: 7,
    type: "desserts",
  },
  {
    id: 26,
    name: "Panna cotta",
    ingredients: "cream, sugar, vanilla, gelatin",
    price: 11,
    type: "desserts",
  },
  {
    id: 27,
    name: "Fruit salad",
    ingredients: "mixed fruits, mint, honey",
    price: 6,
    type: "desserts",
  },
  {
    id: 28,
    name: "Brownie",
    ingredients: "chocolate, butter, sugar, eggs",
    price: 5,
    type: "desserts",
  },
  {
    id: 29,
    name: "Lemon tart",
    ingredients: "lemon, pastry, sugar, eggs",
    price: 9,
    type: "desserts",
  },
  {
    id: 30,
    name: "Creme brulee",
    ingredients: "cream, sugar, vanilla, egg yolks",
    price: 12,
    type: "desserts",
  },

  // Drinks
  {
    id: 31,
    name: "Mojito",
    ingredients: "rum, mint, lime, soda water",
    price: 8,
    type: "drinks",
  },
  {
    id: 32,
    name: "Margarita",
    ingredients: "tequila, lime, triple sec, salt",
    price: 10,
    type: "drinks",
  },
  {
    id: 33,
    name: "Pina Colada",
    ingredients: "rum, coconut cream, pineapple juice",
    price: 9,
    type: "drinks",
  },
  {
    id: 34,
    name: "Old Fashioned",
    ingredients: "whiskey, bitters, sugar, orange peel",
    price: 12,
    type: "drinks",
  },
  {
    id: 35,
    name: "Martini",
    ingredients: "gin, vermouth, olive",
    price: 11,
    type: "drinks",
  },
  {
    id: 36,
    name: "Bloody Mary",
    ingredients: "vodka, tomato juice, Worcestershire sauce",
    price: 10,
    type: "drinks",
  },
  {
    id: 37,
    name: "Cosmopolitan",
    ingredients: "vodka, cranberry juice, triple sec, lime",
    price: 9,
    type: "drinks",
  },
  {
    id: 38,
    name: "Gin and Tonic",
    ingredients: "gin, tonic water, lime",
    price: 8,
    type: "drinks",
  },
  {
    id: 39,
    name: "Whiskey Sour",
    ingredients: "whiskey, lemon juice, sugar",
    price: 11,
    type: "drinks",
  },
  {
    id: 40,
    name: "Tequila Sunrise",
    ingredients: "tequila, orange juice, grenadine",
    price: 9,
    type: "drinks",
  },
];

function Index() {
  const [meals, setMeals] = useState([]);

  const getMeals = (data, choice) => {
    const filteredData = data.filter((item) => item.type === choice);
    setMeals(filteredData);
  };
  const items = [
    {
      label: <div onClick={() => getMeals(data, "starters")}>Starters</div>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <div onClick={() => getMeals(data, "mains")}>Main dishes</div>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <div onClick={() => getMeals(data, "desserts")}>Desserts</div>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <div onClick={() => getMeals(data, "starters")}>Starters</div>,
      key: "0",
    },
    {
      type: "divider",
    },
  ];
  useEffect(() => {
    getMeals(data, "starters");
  }, []);

  return (
    <div className={styles.mainContainer}>
      <header>Menu</header>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        className={styles.dropdownMenu}
      >
        <span onClick={(e) => e.preventDefault()}>
          <Space>
            Menu
            <DownOutlined />
          </Space>
        </span>
      </Dropdown>
      <img src={decoration} alt="" />
      <section>
        <span onClick={() => getMeals(data, "starters")}>Starters</span>
        <span onClick={() => getMeals(data, "mains")}>Main dishes</span>
        <span onClick={() => getMeals(data, "desserts")}>Desserts</span>
        <span onClick={() => getMeals(data, "drinks")}>Drinks</span>
      </section>
      <main>
        {meals.map((item) => {
          return (
            <MenuItem
              key={item.id}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
            />
          );
        })}
      </main>
    </div>
  );
}

export default Index;
