import React, { useState } from "react";
import { Drawer, Button } from "antd";
import classes from "./drawer.module.css";
import img1 from "./../productpart/assets/img1.jpg";
import "./drawerCustom.css";
import { ReactComponent as Bag } from "./assets/bag.svg";
import { connect } from "react-redux";
import * as midddleWare from "../../redux/middlewares/middleWare";
const DrawerComponent = (props) => {
  const {
    draweritem,
    counter,
    Draweritem,
    decrementFun,
    setdrawercallback,
  } = props;
  console.log(counter);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const itemDel = (item, itemIndex) => {
    console.log(itemIndex, " drwer itemIndex");
    props.dispatchData(item, itemIndex);
  };
  const total = draweritem
    ? draweritem.reduce((pre, cur) => {
        return (
          console.log(pre, "pre", cur, "curr") ||
          pre + cur.counter * parseInt(cur.price)
        );
      }, 0)
    : "";
  return (
    <>
      <Button type="primary" className={classes.modelBtn} onClick={showDrawer}>
        <span className={classes.MainSpan}>
          <span className={classes.firstSpan}>
            <span>
              <Bag />
            </span>
            {props.updatedItemLength ? props.updatedItemLength : 0} item
          </span>
          <span className={classes.secondSpan}>{total} $</span>
        </span>
      </Button>
      <Drawer
        title={
          <div className={classes.titleDiv}>
            {" "}
            <div>
              <Bag />
            </div>
            <div className={classes.Itemdiv}>
              {props.updatedItemLength ? props.updatedItemLength : 0} Item
            </div>
          </div>
        }
        closable={true}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        {draweritem
          ? draweritem.map((item, index) => {
              setdrawercallback(item);
              // itemPrice = parseInt(item.price);
              // itemCounter = item.counter;
              return (
                <div className={classes.mainDivWrapper}>
                  <div className={classes.mainDiv}>
                    <div className={classes.itemmainWrapper}>
                      <div className={classes.itemBox}>
                        <div className={classes.counterBtnStyle}>
                          <button
                            className={classes.itemPlusbuttonStyle}
                            onClick={() => Draweritem(item, index)}
                          >
                            +
                          </button>
                          <span>{item ? item.counter : item.counter}</span>
                          <button
                            className={classes.itemMinusbuttonStyle}
                            onClick={() => {
                              decrementFun(item, index);
                            }}
                          >
                            -
                          </button>
                        </div>
                        <img
                          src={item.image1}
                          className={classes.itemBoxImg}
                          alt=""
                        />
                        <div className={classes.itemInformation}>
                          <span className={classes.itemNameStyle}>
                            {item.title}
                          </span>
                          <span className={classes.itemPriceStyle}>
                            {item.price}
                          </span>
                          <span className={classes.itemNumberMultiple}>
                            {item ? item.counter : item.counter} x {item.price}
                          </span>
                        </div>
                        <span className={classes.itemTotalPrice}>
                          {parseInt(item.price) * item.counter}$
                        </span>
                        <button
                          className={classes.listCrossButton}
                          onClick={() => itemDel(item, index)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}

        <div className={classes.cartStyleCheckOutWraper}>
          <span className={classes.checkoutBox}>
            {/* <span> */}
            <button className={classes.questionButton}>
              Do you have a voucher?
            </button>
          </span>
          <button className={classes.checkOutbutton}>
            <span className={classes.checkoutText}> Checkout</span>{" "}
            <span className={classes.checkoutPrice}>
              {total}${/* {itemPrice * itemCounter}$ */}
            </span>
          </button>
          {/* </span> */}
        </div>
      </Drawer>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchData: (data, itemIndex) => {
      dispatch(midddleWare.CrossIconFireFromDrawer(data, itemIndex));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    updatedItemLength: state.dataReducer.itemLength,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);
