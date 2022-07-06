import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCarList] = useState([]);

  const buttonShopping = () => {};
  const addItem = (item, qty) => {
    let found = cartList.find((product) => product.idItem === item.id);
    if (found === undefined) {
      setCarList([
        ...cartList,
        {
          idItem: item.id,
          descriptionItem: item.description,
          imgItem: item.image[0],
          nameItem: item.name,
          costItem: item.price,
          qtyItem: qty,
        },
      ]);
    } else {
      found.qtyItem += qty;
      setCarList([...cartList]);
    }
  };

  const removeItem = () => {
    setCarList([]);
  };

  const clear = (id) => {
    let result = cartList.filter((item) => item.idItem != id);
    setCarList(result);
  };

  const calcTotalItems = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].costItem * cartList[index].qtyItem;
  };

  const calcSubTotal = () => {
    let totalPerItem = cartList.map((item) => calcTotalItems(item.idItem));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  const calcImpuestos = () => {
    return calcSubTotal() * 0.21;
  };

  const calcTotal = () => {
    return calcSubTotal() + calcImpuestos();
  };

  const calcItemsQty = () => {
    let qtys = cartList.map((item) => item.qtyItem);
    return qtys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        buttonShopping,
        calcItemsQty,
        calcTotal,
        calcSubTotal,
        calcTotalItems,
        calcImpuestos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
