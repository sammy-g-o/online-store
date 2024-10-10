/* eslint-disable react/prop-types */
import ListOfDevices from "./listOfDevices";
import Categories from "./categories";
import Cart from "./cart";

function DeviceList({
  cart,
  onDeleteFromCart,
  onAddToCart,
  toggleCart,
  onToggleLappy,
  onTogglePhone,
  onToggleAll,
  onToggleAccessory,
  toggleALl,
  toggleLappy,
  togglePhone,
  toggleAccessory,
}) {
  return (
    <>
      <div className="categories">
        <Categories
          onToggleLappy={onToggleLappy}
          onTogglePhone={onTogglePhone}
          onToggleAll={onToggleAll}
          onToggleAccessory={onToggleAccessory}
        />
      </div>
      <div className="listOfDevices">
        <ListOfDevices
          onAddToCart={onAddToCart}
          toggleALl={toggleALl}
          toggleLappy={toggleLappy}
          toggleAccessory={toggleAccessory}
          togglePhone={togglePhone}
        >
          {toggleCart && (
            <Cart onDeleteFromCart={onDeleteFromCart} cart={cart} />
          )}
        </ListOfDevices>
      </div>
    </>
  );
}

export default DeviceList;
