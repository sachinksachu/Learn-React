import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
//Action creators are exactly that—functions that create actions. 

export const addComment = (dishId, rating, author, comment) => ({ //Action
    type: ActionTypes.ADD_COMMENT, //Actions must have a type property that indicates the type of action being performed.
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});