import React, { useEffect } from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import cardComclasses from "./cardsCom.module.css";
import "./cardsCustom.css";
import ModelComponent from "./cardsModel/cardsModel";
import DrawerCom from "../../Drawer/drawer";
import { ReactComponent as Cart } from "./cart/cartasset/cart-minus.svg";
import classes from "./products.module.css";
import * as middleWare from "../../../redux/middlewares/middleWare";
import { connect } from "react-redux";
import { useState } from "react";
import { SearchContext } from "./../../header/useContext";
import { useContext } from "react";
const { Meta } = Card;
const CardComponent = (props) => {
  const search = useContext(SearchContext);
  const [visible, setvisible] = useState(false);
  const [modelItemIndex, setmodelItemIndex] = useState();
  const [drawercallback, setdrawercallback] = useState();
  const { cardToShow, visibleitem, setcardToShow } = props;
  const showModal = (item, index) => {
    setvisible(true);
    console.log(index);
    setmodelItemIndex(index);
    // setmodelItem(item);
    props.dispatchModelItem(item);
  };
  const handleOk = (e) => {
    setvisible(false);
  };
  const getCardClass = (index) => {
    return props.updateActiveButton[index]
      ? cardComclasses.cartsbuttonhide
      : cardComclasses.cartsbutton;
  };
  const getCardClass1 = (index) => {
    return props.updateActiveButton[index]
      ? cardComclasses.plUsMinusDivshow
      : cardComclasses.plUsMinusDiv;
  };

  const Draweritem = (item, index) => {
    props.dispatchData(item);
  };

  const decrementFun = (mainitem, index) => {
    props.dispatchDecrementData(mainitem);
  };

  const itemNumberFun = (item) => {
    props.itemLength(item);
  };
  const active = (index) => {
    props.activeButton(index);
  };

  const filterForEveryOne = (item) => {
    console.log(item);

    return item.filter((object) => {
      const checkField = object.title.toLowerCase();
      const filteredField = search.searchProduct.toLowerCase();
      return checkField.includes(filteredField);
    });
  };
  let filterArray = [];
  if (cardToShow && cardToShow.length > 0) {
    filterArray = filterForEveryOne(cardToShow);
  }
  return (
    <div className={classes.productList}>
      {filterArray.slice(0, visibleitem).map((item, index) => {
        return (
          <div className={classes.cardStyle}>
            <Card
              hoverable
              className={classes.CardsOriginal}
              cover={
                <img
                  alt="example"
                  className={cardComclasses.coverImg}
                  onClick={() => showModal(item, index)}
                  src={item.image1}
                />
              }
            >
              <div>
                <Meta
                  title={item.title}
                  description="1pc(s)"
                  onClick={() => showModal(item, index)}
                />
              </div>
              <div className={cardComclasses.cardsEndDiv}>
                <p onClick={() => showModal(item, index)}>{item.price}</p>
                <button
                  onClick={() => {
                    active(index);
                    Draweritem(item, index);
                    itemNumberFun(1);
                  }}
                  className={getCardClass(item.id)}
                >
                  {" "}
                  <Cart />
                  <span>cart</span>{" "}
                </button>
                <div className={getCardClass1(item.id)}>
                  <button
                    onClick={() => {
                      Draweritem(item, index);
                    }}
                    className={cardComclasses.plusbutton}
                  >
                    +
                  </button>
                  <span>{item.counter}</span>
                  <button
                    className={cardComclasses.minusButton}
                    onClick={() => decrementFun(item, index)}
                  >
                    -
                  </button>
                </div>
              </div>
            </Card>
          </div>
        );
      })}

      <ModelComponent
        handleOk={handleOk}
        visible={visible}
        setvisible={setvisible}
        modelItemIndex={modelItemIndex}
        decrementFun={decrementFun}
        Draweritem={Draweritem}
        getCardClass={getCardClass}
        getCardClass1={getCardClass1}
        active={active}
        itemNumberFun={itemNumberFun}
      />

      <div>
        <DrawerCom
          draweritem={props.updatedData}
          decrementFun={decrementFun}
          cardToShow={cardToShow}
          Draweritem={Draweritem}
          setdrawercallback={setdrawercallback}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchData: (data) => dispatch(middleWare.addToCart(data)),
    dispatchDecrementData: (data) =>
      dispatch(middleWare.decrementFromCart(data)),
    activeButton: (data) => dispatch(middleWare.activeButtonFun(data)),
    itemLength: (data) => dispatch(middleWare.itemLengthFun(data)),
    dispatchModelItem: (data) => dispatch(middleWare.modelItem(data)),
  };
};
const mapStateToProps = (state) => {
  return {
    cardToShow: state.dataReducer.data,
    updatedData: state.dataReducer.drawerItem,
    updateActiveButton: state.dataReducer.isActive,
    updatedItemLength: state.dataReducer.itemLength,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);
