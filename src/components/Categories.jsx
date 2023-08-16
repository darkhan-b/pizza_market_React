import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'


// class Categories extends React.Component {

//     state = {
//         activeItem: 3,
//         test: 123
//     };

//     onSelectItem = id => {
//         this.setState({
//             activeItem: id
//         });
//         this.forceUpdate();
//     }

//     render() {
//         const {items, onClickItem} = this.props;
//         console.log(this.state)
//         return (
//                 <div className="categories">
//               <ul>
//                 <li>Все</li>
//                 {
//                     items.map((name, id) =>
//                      <li className={this.state.activeItem === id ? 'active' : ''}
//                      onClick={() => this.onSelectItem(id)}
//                      key={`${name}_${id}`}>{name}</li>
//                      )
//                 }
//               </ul>
//             </div>
//         )
//     }
// }

const Categories = memo(function Categories({activeCategory, items, onClickCategory}) {


  // console.log(items)
return (
  <div className="categories">
            <ul>
              <li 
              className={activeCategory === null ? 'active' : ''} 
              onClick={() => onClickCategory(null)}>Все</li>
              {items && 
                  items.map((name, id) =>
                   <li 
                   className={activeCategory === id ? 'active' : ''}
                   onClick={() => onClickCategory(id)}
                   key={`${name}_${id}`}>{name}</li>
                   )
              }
            </ul>
          </div>
)

});

Categories.propTypes = { // prop-types strict
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func

};

Categories.defaultProps = {
  activeCategory: null, 
  items: [],
};

export default Categories;