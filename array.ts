const addition = () => {
  console.log("checking what is in the string ");
};

addition();

const fruits = [
  {
    id: 1,
    name: "apple",
  },
  {
    id: 2,
    name: "banana",
  },
  {
    id: 3,
    name: "oragne",
  },
];

const apple = fruits.find((fruit) => fruit.id === 1);

console.log("checking what is inside student   ", apple);

const fruitPicker = fruits.find((fruit) => fruit.id === 2);

console.log("checking what is inside the fruitPicker   ", fruitPicker);

const keys = Object.keys(fruitPicker);

console.log("checking what is inside the key  ",keys)
