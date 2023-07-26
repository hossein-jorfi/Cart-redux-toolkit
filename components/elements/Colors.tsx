const Colors = () => {
  const items = [
    { id: 0, color: "red-400" },
    { id: 1, color: "blue-400" },
    { id: 2, color: "green-400" },
    { id: 3, color: "gray-400" },
  ];
  return (
    <div className="flex">
      {/* {items.map((item) => (
        <div key={item.id} className={`w-4 h-4 rounded-full bg-${item.color}`}></div>
      ))} */}
      <div className="w-4 h-4 rounded-full bg-red-500 outline outline-2 outline-white"></div>
      <div className="w-4 h-4 rounded-full bg-blue-500 outline outline-2 outline-white -ml-1"></div>
      <div className="w-4 h-4 rounded-full bg-green-500 outline outline-2 outline-white -ml-1"></div>
    </div>
  );
};

export default Colors;
