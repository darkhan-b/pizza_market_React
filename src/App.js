import React from 'react'
import axios from 'axios';


import {connect} from 'react-redux'
import { setPizzas as setPizzasAction} from './redux/actions/pizzas';
import { Route, Routes } from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages';



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

class App extends React.Component{

  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
    .then(({data})=> {
   this.props.savePizza(data.pizzas);
  });
  };

  
  render() {
    // console.log(this.props.filters)
    return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
        <Route path="/" Component={() => <Home items={this.props.items} />} exact/>
        <Route path="/cart" Component={Cart} exact/>
        </Routes>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    savePizza: (items) => dispatch(setPizzasAction(items)),
    dispatch
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
