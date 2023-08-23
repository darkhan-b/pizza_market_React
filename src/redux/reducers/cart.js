
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val,key) => {
        return val[key]
    }, obj[firstKey]);
}

const getTotalPrice = (arr) => arr.reduce((sum,obj) => obj.price + sum, 0)


const getTotalSum = (obj,path) => {
    return Object.values(obj).reduce(
        (sum,obj) =>  {
           const value = _get(obj,path);
            return sum + value;
        }, 0);
        };


const cart = (state = initialState, action) => {
    switch(action.type) {
       case 'ADD_PIZZA_CART': {
        const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

        const newItems = { 
            ...state.items,
            [action.payload.id]: {
            items: currentPizzaItems,
            totalPrice: getTotalPrice(currentPizzaItems),
            },  
        };
        // const totalCount = Object.keys(newItems).reduce((sum,key) =>
        //  newItems[key].items.length + sum,
        //   0);

        // const totalPrice = Object.keys(newItems).reduce((sum,key) =>
        // newItems[key].totalPrice + sum,
        //  0);

         const totalCount = getTotalSum(newItems, 'items.length')
         const totalPrice = getTotalSum(newItems, 'totalPrice')

        return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
        };

    }
        case 'CLEAR_CART':
        return {
                totalPrice: 0,
                totalCount: 0,
                items: {}
        }
        case 'PLUS_CART_ITEM':
            const newObjPlus = [...state.items[action.payload].items,
            state.items[action.payload].items[0]];
            const ggPlus = {
                ...state.items,
                [action.payload]: {
                    items: newObjPlus,
                    totalPrice: getTotalPrice(newObjPlus),
                    },
            };
            const totalCount = getTotalSum(ggPlus, 'items.length')
            const totalPrice = getTotalSum(ggPlus, 'totalPrice')
        
            return {
                ...state,
                items: ggPlus,
                totalCount,
                totalPrice
        };

        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

            const ggMinus = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                    },
            };


            const totalCount = getTotalSum(ggMinus, 'items.length')
            const totalPrice = getTotalSum(ggMinus, 'totalPrice')
        return {
                ...state,
                items: ggMinus,
                totalCount,
                totalPrice
        };
    }

        case 'REMOVE_CART_ITEM':
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].totalPrice;

            delete newItems[action.payload];
        return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
                
        }
        default:
            return state;
    }
};


export default cart;