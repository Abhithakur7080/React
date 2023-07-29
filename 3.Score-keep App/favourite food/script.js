const food = {
  pizza: {
    name: "Pizza",
    image:
      "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294935/assets/shourav-sheikh-a66sGfOnnqQ-unsplash_dufyvk.jpg",
  },
  burger: {
    name: "Burger",
    image:
      "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294934/assets/food-photographer-E94j3rMcxlw-unsplash_kuljtd.jpg",
  },
  pasta: {
    name: "Pasta",
    image:
      "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294934/assets/pixzolo-photography-aeESmmFKH0M-unsplash_wag5lc.jpg",
  },
  sushi: {
    name: "Sushi",
    image:
      "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294934/assets/pixzolo-photography-aeESmmFKH0M-unsplash_wag5lc.jpg",
  },
  chickenBiryani: {
    name: "Chicken Biryani",
    image:
      "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294935/assets/mario-raj-ysmeQt1dzcw-unsplash_ivdvre.jpg",
  },
};

let favouriteFood;

const handleFoodClick = (name) => {
  favouriteFood = food[name];
  rootElement.render(<App />);
};

const handlePizzaClick = () => {
  favouriteFood = food.pizza;
  rootElement.render(<App/>);
};
const handleBurgerClick = () => {
  favouriteFood = food.burger;
  rootElement.render(<App />);
};
const handlePastaClick = () => {
  favouriteFood = food.pasta;
  rootElement.render(<App />);
};
const handleSushiClick = () => {
  favouriteFood = food.sushi;
  rootElement.render(<App />);
};
const handleChickenBiryaniClick = () => {
  favouriteFood = food.chickenBiryani;
  rootElement.render(<App />);
};

const FavouriteFood = () => (
  <div className="favourite-food">
    <strong>Your favourite food is:</strong>
    <h3>{favouriteFood.name}</h3>
    <img src={favouriteFood.image} />
  </div>
);

const App = () => (
  <div className="App">
    {favouriteFood && <FavouriteFood/>}
    {typeof handleFoodClick === "function" && (
      <h2>Select your favourite food</h2>
    )}
    <div className="food-list">
      <div onClick={handlePizzaClick}>
        <h3>{food.pizza.name}</h3>
        <img src={food.pizza.image} />
      </div>
      <div onClick={handleBurgerClick}>
        <h3>{food.burger.name}</h3>
        <img src={food.burger.image} />
      </div>
      <div onClick={handlePastaClick}>
        <h3>{food.pasta.name}</h3>
        <img src={food.pasta.image} />
      </div>
      <div onClick={handleSushiClick}>
        <h3>{food.sushi.name}</h3>
        <img src={food.sushi.image} />
      </div>
      <div onClick={handleChickenBiryaniClick}>
        <h3>{food.chickenBiryani.name}</h3>
        <img src={food.chickenBiryani.image} />
      </div>
    </div>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);