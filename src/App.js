import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Busket from './components/busket/Busket';
import { pizzasInBusket, sliderCard, pizzasData } from './data/Data';
// import axios from 'axios';

import React from 'react';


function App() {
  const [pizzas, setPizzas] = useState(pizzasData);

  const [order, setOrder] = useState([]);

  return (
    <div className="wrapper">
      <Header order={order} />

      <Routes>
        <Route
          path="/"
          element={
            <Content
              setPizzas={setPizzas}
              pizzas={pizzas}
              sliderCard={sliderCard}
              order={order}
              setOrder={setOrder}
            />
          }
        />
        <Route path="/busket" element={<Busket pizzasInBusket={pizzasInBusket} />} />
      </Routes>
    </div>
  );
}

export default App;


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
