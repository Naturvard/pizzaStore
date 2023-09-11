import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from 'react-dom' directly
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header/>
      
      <Menu />
      
      <Footer/>
    </div>
  );
 
}


const root = document.getElementById("root");
function Header(){
  const style = {};
  return <header className="header" >
    <h1 style={style}>Fast React Pizza And Co.</h1>;

  </header>

 

}
function Menu() {
   const pizzas = pizzaData;
   const numPizzas=pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
     
      {numPizzas > 0 ? (
        <> 
        {/* using react fragment */}
         <p>
        Prepare to embark on a culinary journey like no other as we present a
        tantalizing menu filled with exquisite flavors and culinary delights
      </p>
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      
      </> ): (
        <p>We are still working on Menu.Please come back later</p>
      )}
    </main>
  );
}

function Pizza({pizzaObj}) {//child component of Menu
  
 
  // if(pizzaObj.soldOut)
  // return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}

    
function Footer(){
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 23;

    const isOpen = hour >= openHour && hour <= closeHour 
     console.log(isOpen)
   
  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We're open from {openHour}:00 to {closeHour}:00
          </p>
        )}
      </footer>
    </div>
  );
 



}
function Order({closeHour}){
      <div className="order">
          <p>
            We're currently closed until {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>

          </div>
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
