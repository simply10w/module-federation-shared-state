import { atom, selector } from "recoil";

export const fruit = atom({
  key: "fruit",
  default: [
    {
      name: "Apple",
      image: "http://localhost:3001/fruit/apple.jpg",
      price: 1,
    },
    {
      name: "Bananas",
      image: "http://localhost:3001/fruit/banana.jpg",
      price: 3,
    },
    {
      name: "Canteloupe",
      image: "http://localhost:3001/fruit/canteloupe.jpg",
      price: 3,
    },
    {
      name: "Grapes",
      image: "http://localhost:3001/fruit/grapes.jpg",
      price: 3,
    },
    {
      name: "Mango",
      image: "http://localhost:3001/fruit/mango.jpg",
      price: 2,
    },
    {
      name: "Orange",
      image: "http://localhost:3001/fruit/orange.jpg",
      price: 1,
    },
    {
      name: "Pear",
      image: "http://localhost:3001/fruit/pear.jpg",
      price: 1,
    },
    {
      name: "Plum",
      image: "http://localhost:3001/fruit/plum.jpg",
      price: 1,
    },
    {
      name: "Strawberries",
      image: "http://localhost:3001/fruit/strawberry.jpg",
      price: 1,
    },
    {
      name: "Watermelon",
      image: "http://localhost:3001/fruit/watermelon.jpg",
      price: 5,
    },
  ],
});

export const selectedItems = atom({
  key: "selectedItems",
  default: [],
});

export const cartCount = selector({
  key: "cartCount",
  get: ({ get }) => {
    return get(selectedItems).length;
  },
});

export const theBill = selector({
  key: "theBill",
  get: ({ get }) => {
    const items = get(fruit)
      .filter(({ name }) => get(selectedItems).includes(name))
      .map((fruit) => ({
        ...fruit,
        quantity: 2,
        total: fruit.price * 2,
      }));

    return {
      items,
      total: items.reduce((a, { total }) => a + total, 0),
    };
  },
});
