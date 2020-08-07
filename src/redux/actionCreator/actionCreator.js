import * as allAction from '../Actions/allActions'
export const drawerCartAction = (data) => {
    return {
        type : allAction.ADD_TO_DRAWER,
        data
    }
}
export const decrementFromCart = (data) => {
    return {
        type : allAction.DECREMENT_FROM_DRAWER,
        data
    }
}
export const activeButtonCreator = (data) => {
    return {
        type: allAction.ACTIVE_BUTTON,
        data
    }
}
export const itemLengthFun = (data) => {
    return {
        type: allAction.ITEM_LENGTH,
        data
    }
}
export const CrossIconFireFromDrawerFun = (data,index) => {  
    return {
        type: allAction.CROSS_ICON,
        data,
        index
    }
}
export const modelItemFun = (data) => {
    return {
        type: allAction.MODEL_ITEM,
        data
    }
}