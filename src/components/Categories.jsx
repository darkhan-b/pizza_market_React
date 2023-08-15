import React, { useState, memo } from 'react'


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

const Categories = memo(function Categories({items, onClickItem}) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (id) => {
      setActiveItem(id);
      onClickItem(id);
  }

  // console.log(items)
return (
  <div className="categories">
            <ul>
              <li 
              className={activeItem === null ? 'active' : ''} 
              onClick={() => onSelectItem(null)}>Все</li>
              {items && 
                  items.map((name, id) =>
                   <li 
                   className={activeItem === id ? 'active' : ''}
                   onClick={() => onSelectItem(id)}
                   key={`${name}_${id}`}>{name}</li>
                   )
              }
            </ul>
          </div>
)

});

export default Categories;