import {createStore} from "redux";

export function addProduct(payload) {
    return {
        type: "ADD_PRODUCT",
        payload
    }
}

export function getProduct(payload) {
    return {
        type: "GET_PRODUCT",
        payload
    }
}
export function getFeaturedProduct(payload) {
    return {
        type: "GET_FEATURED_PRODUCT",
        payload
    }
}
export function removeProduct(payload) {
    return {
        type: "REMOVE_PRODUCT",
        payload
    }
}

const initialState = {
    products: [],
    featuredProducts:[],
    cartProducts: [],
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case "ADD_PRODUCT":
                return { ...state, cartProducts: [...state.cartProducts, action.payload] };
        case "GET_PRODUCT":
            return { ...state, products: action.payload };
        case "GET_FEATURED_PRODUCT":
            return { ...state, featuredProducts: action.payload };
        case "REMOVE_PRODUCT":
            if(action.payload==="emptyCart"){
                state.cartProducts.length=0;
                return { ...state, cartProducts: [...state.cartProducts] };
            }
            else{
                let filteredArr=state.cartProducts.filter(product=>product.id!==action.payload.id);
                return { ...state, cartProducts: filteredArr };
            }             
        default:
            return state;
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store