import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Categories, LoadingBlock, PizzaBlock, SortPopup} from '../components';


import {setCategory} from '../redux/actions/filters'
import { fetchPizzas} from '../redux/actions/pizzas';

const categoryNames = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
];

const sortItems = [
  {name: 'популярности', type:'popular'},
  {name: 'цене', type:'price'},
  {name: 'алфавит', type: 'alphabet'}
];

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);



  React.useEffect(() => {
    // Перенести redux и подключить redux-thunk
    // следить за фильтрацией и сортировкой, подставлять параметры в URL из redux
    // сделать имитацию загрузки пицц
        dispatch(fetchPizzas())
     },[category]);



  const onSelectCategory =  React.useCallback((id) => {
    dispatch(setCategory(id));
  }, []);


  return (
    <div className="container">
    <div className="content__top">
      <Categories 
      onClickItem={onSelectCategory}
      items={categoryNames}/>
      <SortPopup items={sortItems}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {isLoaded 
      ? items.map((obj) => <PizzaBlock
      isLoading={true}
      key={obj.id}
      {...obj}/>) :
       Array(10).fill(0).map((_, index) => <LoadingBlock key={index}/> )}

    </div>
  </div>
  )
}

export default Home