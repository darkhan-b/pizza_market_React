import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Categories, LoadingBlock, PizzaBlock, SortPopup} from '../components';


import {setCategory, setSortBy} from '../redux/actions/filters'
import { fetchPizzas} from '../redux/actions/pizzas';

const categoryNames = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
];

const sortItems = [
  {name: 'популярности', type:'popular', order: 'desc'},
  {name: 'цене', type:'price', order: 'desc'},
  {name: 'алфавит', type: 'name', order: 'asc'},
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
        dispatch(fetchPizzas(sortBy, category))
     },[category, sortBy]);



  const onSelectCategory =  React.useCallback((id) => {
    dispatch(setCategory(id));
  }, []);

  const onSelectSortType =  React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);


  return (
    <div className="container">
    <div className="content__top">
      <Categories 
      activeCategory={category}
      onClickCategory={onSelectCategory}
      items={categoryNames}/>
      <SortPopup
      activeSortType={sortBy.type}
      onClickSortType={onSelectSortType}
      items={sortItems}
      />

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