// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Busket from './components/busket/Busket';
// import { pizzasInBusket, sliderCard, pizzasData } from './data/Data';

import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/busket" element={<Busket />} />
      </Routes>
    </div>
  );
}

export default App;
//!first save
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//     // fetch('http://localhost:3000/db.json').then((response) =>
//     //   response.json().then((json) => setPizzas(json.pizzas)),
//     // );
//   }, []);

// export const Appp = () => {
//   const [count, setCount] = useState(0)
//   const onClick = () => {
//     setCount(count+1)
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   )
// }

// export class Appp extends React.Component {

//   state = { count: 0 }

//   inc = () => {
//     this.setState(({ count }) => ({
//       count: count + 1
//     }));
//     }
//   render() {

//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.inc}>click</button>
//       </div>
//     )
//   }
// }

//!second save
// import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Content from './components/content/Content';
// import Header from './components/header/Header';
// import Busket from './components/busket/Busket';
// import { pizzasInBusket, sliderCard, pizzasData } from './data/Data';
// // import axios from 'axios';

// import React from 'react';

// function App() {
//   const [pizzas, setPizzas] = useState(pizzasData);

//   const [order, setOrder] = useState([]);

//   const addToOrder = (product) => {
//     const exist = order.find((element) => element.id === product.id);
//     if (exist) {
//       setOrder(
//         order.map((element) =>
//           element.id === product.id ? { ...exist, total: exist.total + 1 } : element,
//         ),
//       );
//     } else {
//       setOrder([...order, { ...product, total: 1 }]);
//     }

//     // setOrder([...order, product])
//   };

//   const onRemove = (product) => {
//     // setOrder(order.filter((p) => p.id !== product.id));

//     const exist = order.find((element) => element.id === product.id);
//     if (exist.total === 1) {
//       setOrder(order.filter((element) => element.id !== product.id));
//     } else {
//       setOrder(
//         order.map((element) =>
//           element.id === product.id ? { ...exist, total: exist.total - 1 } : element,
//         ),
//       );
//     }
//   };

//   return (
//     <div className="wrapper">
//       <Header order={order} />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Content
//               setPizzas={setPizzas}
//               pizzas={pizzas}
//               sliderCard={sliderCard}
//               order={order}
//               onAdd={addToOrder}
//               setOrder={setOrder}
//             />
//           }
//         />
//         <Route
//           path="/busket"
//           element={
//             <Busket
//               order={order}
//               pizzasInBusket={pizzasInBusket}
//               onAdd={addToOrder}
//               onRemove={onRemove}
//             />
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;
