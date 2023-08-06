import React, { useState } from 'react'


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

function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (id) => {
        setActiveItem(id);
    }

    // console.log(items)
  return (
    <div className="categories">
              <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {
                    items.map((name, id) =>
                     <li className={activeItem === id ? 'active' : ''}
                     onClick={() => onSelectItem(id)}
                     key={`${name}_${id}`}>{name}</li>
                     )
                }
              </ul>
            </div>
  )
}

export default Categories;