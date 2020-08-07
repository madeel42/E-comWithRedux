import * as actionCreater from "./../actionCreator/actionCreator";
export const addToCart = (data) => {
  console.log(data);
  return (dispatch) => {
    return dispatch(actionCreater.drawerCartAction(data));
  };
};
export const decrementFromCart = (data) => {
  return (dispatch) => {
    return dispatch(actionCreater.decrementFromCart(data));
  };
};
export const activeButtonFun = (data) => {
  console.log(data);
  return (dispatch) => {
    return dispatch(actionCreater.activeButtonCreator(data));
  };
};
export const itemLengthFun = (data) => {
  return (dispatch) => {
    return dispatch(actionCreater.itemLengthFun(data));
  };
};
export const CrossIconFireFromDrawer = (data, index) => {
  console.log(data, index);
  return (dispatch) => {
    return dispatch(actionCreater.CrossIconFireFromDrawerFun(data, index));
  };
};
export const modelItem = (data) => {
  return dispatch => {
    return dispatch(actionCreater.modelItemFun(data))
  }
}
