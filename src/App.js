import React from 'react'



import { Route, Routes } from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages';


function App() {



  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Routes>
      <Route path="/" Component={Home} exact/>
      <Route path="/cart" Component={Cart} exact/>
      </Routes>
      </div>
    </div>
  );
}

// function App() {

// React.useEffect(() => {
//   fetch('http://localhost:3000/db.json')
//   .then((resp) => resp.json())
//   .then(json=> {
//     setPizzas(json.pizzas)
//   });
// }, []);


// React.useEffect(() => {
//   axios.get('http://localhost:3000/db.json').then(({ data})=> {
//     setPizzas(data.pizzas);
//   });
// }, []);


//   return (
//     <div className="wrapper">
//       <Header/>
//       <div className="content">
//         <Routes>
//       <Route path="/" Component={() => <Home items={pizzas}/>} exact/>
//       <Route path="/cart" Component={Cart} exact/>
//       </Routes>
//       </div>
//     </div>
//   );
// }

// class App extends React.Component{

//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json')
//     .then(({data})=> {
//    this.props.savePizza(data.pizzas);
//   });
//   };

  
//   render() {
//     // console.log(this.props.filters)
//   }
// }


// // export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);


export default App;