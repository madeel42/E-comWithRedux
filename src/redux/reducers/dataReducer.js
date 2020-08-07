import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import img12 from "./assets/img12.jpg";
import img13 from "./assets/img13.jpg";
import img14 from "./assets/img14.jpg";
import img15 from "./assets/img15.jpg";
import * as allAction from "../Actions/allActions";
import { act } from "react-dom/test-utils";
let initialData = {
  data: [
    {
      id: 0,
      image1: img11,
      image2: img11,
      image3: img11,
      image4: img11,
      counter: 1,
      title: "Magnetic Designs Women Printed Fit And Flare Dress",
      price: "5$",
      description:
        "Mauve printed knitted fit and flare dress,\
             has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 1,
      image1: img1,
      image2: img1,
      image3: img1,
      image4: img1,
      counter: 1,
      title: "Magnetic Designs Women Printed Fit And Flare Dress",
      price: "5$",
      description:
        "Mauve printed knitted fit and flare dress,\
             has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 2,
      image1: img2,
      image2: img2,
      image3: img2,
      image4: img2,
      counter: 1,
      title: "Flounce High Low Plain Midi Skirt",
      price: "9$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 3,
      image1: img3,
      image2: img3,
      image3: img3,
      image4: img3,
      counter: 1,
      title: "Forever 21 Solid Bodycon Midi Dress",
      price: "5$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 4,
      image1: img4,
      image2: img4,
      image3: img4,
      image4: img4,
      counter: 1,
      title: "Basic Hollow Out Flared Midi Skirt",
      price: "9$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 5,
      image1: img5,
      image2: img5,
      image3: img5,
      image4: img5,
      counter: 1,
      title: "Charming Red Flared Midi Skirt",
      price: "3$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 6,
      image1: img6,
      image2: img6,
      image3: img6,
      image4: img6,
      counter: 1,
      title: "Notch Lapel Single Button Color Block Blazer",
      price: "6$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 7,
      image1: img7,
      image2: img7,
      image3: img7,
      image4: img7,
      counter: 1,
      title: "Lapel Zips Plain Long Sleeve Jackets",
      price: "5$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 8,
      image1: img8,
      image2: img8,
      image3: img8,
      image4: img8,
      counter: 1,
      title: "Basic Hollow Out Flared Midi Skirt",
      price: "9$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 9,
      image1: img9,
      image2: img9,
      image3: img9,
      image4: img9,
      counter: 1,
      title: "Basic Hollow Out Flared Midi Skirt",
      price: "5$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 10,
      image1: img10,
      image2: img10,
      image3: img10,
      image4: img10,
      counter: 1,
      title: "Cowl Neck Kangaroo Pocket Color Block Hoodie",
      price: "6$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 11,
      image1: img13,
      image2: img13,
      image3: img13,
      image4: img13,
      counter: 1,
      title: "Notch Lapel Single Button Color Block Blazer",
      price: "5$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 12,
      image1: img7,
      image2: img7,
      image3: img7,
      image4: img7,
      counter: 1,
      title: "Lapel Zips Plain Long Sleeve Jackets",
      price: "9$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 13,
      image1: img3,
      image2: img3,
      image3: img3,
      image4: img3,
      counter: 1,
      title: "Basic Hollow Out Flared Midi Skirt",
      price: "5$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 14,
      image1: img9,
      image2: img9,
      image3: img9,
      image4: img9,
      counter: 1,
      title: "Basic Hollow Out Flared Midi Skirt",
      price: "2$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 15,
      image1: img15,
      image2: img15,
      image3: img15,
      image4: img15,
      counter: 1,
      title: "Cowl Neck Kangaroo Pocket Color Block Hoodie",
      price: "8$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 16,
      image1: img12,
      image2: img12,
      image3: img12,
      image4: img12,
      counter: 1,
      title: "Notch Lapel Single Button Color Block Blazer",
      price: "9$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 17,
      image1: img11,
      image2: img11,
      image3: img11,
      image4: img11,
      counter: 1,
      title: "Lapel Zips Plain Long Sleeve Jackets",
      price: "5$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 18,
      image1: img13,
      image2: img13,
      image3: img13,
      image4: img13,
      counter: 1,
      title: "Basic Hollow Out Flared Midi Skirt",
      price: "7$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 19,
      image1: img14,
      image2: img14,
      image3: img14,
      image4: img14,
      counter: 1,
      title: "Basic Hollow Out Flared Midi Skirt",
      price: "5$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
    {
      id: 20,
      image1: img10,
      image2: img10,
      image3: img10,
      image4: img10,
      counter: 1,
      title: "Cowl Neck Kangaroo Pocket Color Block Hoodie",
      price: "9$",
      description:
        "Mauve printed knitted fit and flare dress,\
           has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    },
  ],
  drawerItem: [],
  isActive: [],
  itemLength: null,
  modelItem: {},
};

// console.log(arr)
const dataReducer = (state = initialData, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case allAction.ADD_TO_DRAWER:
      let arr = [...newState.drawerItem];
      let existingItem = arr.find((cartItem) => cartItem.id == action.data.id);
      let existingItemMain = newState.data.find(
        (cartItem) => cartItem.id == action.data.id
      );
      // let u = newState.data.find((item)=>{
      //     return item.id == newState.modelItem.id
      //   })
      //   console.log(u)
      if (existingItem && existingItemMain) {
        existingItem.counter += 1;
        existingItemMain.counter += 1;
        // u.counter += 1;
      } else {
        arr.push(action.data);
      }
      return {
        ...newState,
        drawerItem: arr,
        modelItem: existingItemMain,
      };
    case allAction.DECREMENT_FROM_DRAWER:
      let array = [...newState.drawerItem];
      console.log(action.data);
      // arr.push(action.data);
      let existingItem1 = array.find(
        (cartItem) => cartItem.id == action.data.id
      );
      let existingItemmain = newState.data.find(
        (cartItem) => cartItem.id == action.data.id
      );
      console.log(existingItem1);
      if (existingItem1 && existingItemmain) {
        let a =
          existingItem1.counter > 1
            ? existingItem1.counter - 1
            : existingItem1.counter;
        let b =
          existingItemmain.counter > 1
            ? existingItemmain.counter - 1
            : existingItemmain.counter;

        existingItem1.counter = a;
        existingItemmain.counter = b;
      } else {
        array.push(action.data);
      }
      if (action.data.counter == 1 && existingItem1.counter == 1) {
        let r = [...newState.isActive];
        r[action.data.id] = false;
        let filterItem = newState.drawerItem.filter((item) => {
          return action.data.id !== item.id;
        });
        let itemNumberDecrement =
          newState.itemLength > 0
            ? newState.itemLength - 1
            : newState.itemLength;
        return {
          ...newState,
          isActive: r,
          drawerItem: filterItem,
          itemLength: itemNumberDecrement,
        };
      }
      return {
        ...newState,
        drawerItem: array,
        modelItem: existingItemmain,
      };
    case allAction.ACTIVE_BUTTON:
      new Array(action.data.length).fill(false);
      let activeButtons = [...newState.isActive];
      activeButtons[action.data] = true;
      return {
        ...newState,
        isActive: activeButtons,
      };
    case allAction.ITEM_LENGTH:
      let number = newState.itemLength;
      number += action.data;
      return {
        ...newState,
        itemLength: number,
      };
    case allAction.CROSS_ICON:
      let newarr = [...newState.drawerItem];
      let existingItemObj = newarr.find(
        (cartItem) => cartItem.id == action.data.id
      );
      let existingItemmainObj = newState.data.find(
        (cartItem) => cartItem.id == action.data.id
      );
      console.log(existingItemObj, "objeerwdw");
      if (existingItemObj && existingItemmainObj) {
        existingItemObj.counter = 1;
        existingItemmainObj.counter = 1;
      }
      let newfilterItem = newState.drawerItem.filter((item, index) => {
        return action.index !== index;
      });
      let v = [...newState.isActive];
      v[action.data.id] = false;
      let itemNumberDecremnt =
        newState.itemLength > 0 ? newState.itemLength - 1 : newState.itemLength;
      return {
        ...newState,
        drawerItem: newarr && newfilterItem,
        isActive: v,
        itemLength: itemNumberDecremnt,
      };
    case allAction.MODEL_ITEM:
      // let u = newState.data.find((item)=>{
      //   return item.id == action.data.id
      // })
      // console.log(u)
      // if(u) {
      //   u.counter += 1;
      // }
      return {
        ...newState,
        modelItem: action.data,
      };
  }
  return state;
};
export default dataReducer;
