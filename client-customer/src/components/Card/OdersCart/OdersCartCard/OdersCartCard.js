import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext, useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./OdersCartCard.css";
import { CartItemsContext } from "../../../../Context/CartItemsContext";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const OdersCartCard = (props) => {
  let cartItems = useContext(CartItemsContext);
  console.log(cartItems);

  const handelQuantityIncrement = (event) => {
    cartItems.quantity(props.item._id, "INC");
  };

  const handelQuantityDecrement = (event) => {
    if (props.item.itemQuantity > 1) {
      cartItems.quantity(props.item._id, "DEC");
    }
  };

  const handelRemoveItem = () => {
    cartItems.removeItem(props.item);
  };

  return (
    <div className="cart__item__card">
      <div className="cart__item__detail">
        <div className="cart__item__image">
          <img
            src={"data:image/jpg;base64," + props.item.image}
            alt="item"
            className="item__image"
          />
        </div>
        <div className="cart__item__name">{props.item.name}</div>
      </div>
      <div className="cart__item__quantity">
        <div type="text" name="quantity" className="quantity__input">
          {props.quan}
        </div>
      </div>
      <div className="cart__item__price">${props.item.price}</div>
    </div>
  );
};

export default OdersCartCard;
