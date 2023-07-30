import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { shopProduct } from "@/types/shopTypes";
import { addProduct, removeProduct } from "@/redux/features/cart/cartSlice";
import trashPNG from "@/public/icons/AddBox/trash.png";

const AddBottom = ({ product }: { product: shopProduct }) => {
  const cart = useSelector((store: any) => store.cart);
  const dispath = useDispatch();
  const productInCart: shopProduct = cart.products.find(
    (item: any) => item.id === product.id
  );

  const addHandler = () => {
    dispath(addProduct(product));
  };
  const removeHandler = () => {
    dispath(removeProduct(product));
  };

  return (
    <div className="fixed bottom-0 w-full -ml-4 flex justify-between items-center space-x-5 bg-white p-4 rounded-t-lg shadow-[0_0_20px_-10px_rgba(1,1,1,1)]">
      <p className="w-full text-center font-bold text-xl">$ {product.price}</p>
      {!productInCart ? (
        <button
          onClick={addHandler}
          className="bg-orange-500 text-white w-full py-2 rounded-lg"
        >
          Add To Cart
        </button>
      ) : (
        <div className="bg-orange-500 text-white w-full py-2 px-4 rounded-lg flex justify-between items-center">
          {productInCart.count === 1 ? (
            <div onClick={removeHandler} className="w-5">
              <Image src={trashPNG} alt="trash icon" />
            </div>
          ) : (
            <span onClick={removeHandler} className="text-2xl">-</span>
          )}
          <span className="text-xl">{productInCart.count}</span>
          <span onClick={addHandler} className="text-2xl">+</span>
        </div>
      )}
    </div>
  );
};

export default AddBottom;
