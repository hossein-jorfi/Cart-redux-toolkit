const AddBottom = ({ price }: { price: number }) => {
  return (
    <div className="fixed bottom-0 w-full -ml-4 flex justify-between items-center space-x-5 bg-white p-4 rounded-t-lg shadow-[0_0_20px_-10px_rgba(1,1,1,1)]">
      <p className="w-full text-center font-bold text-xl">$ {price}</p>
      <button className="bg-orange-500 text-white w-full py-2 rounded-lg">
        Add To Cart
      </button>
    </div>
  );
};

export default AddBottom;
