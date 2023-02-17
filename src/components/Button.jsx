const Button = ({ price }) => {
  return (
    <button className="flex flex-row justify-center items-center bg-[#222222] rounded-full text-slate-50 w-full pt-4 pb-4 hover:opacity-95">
      <div className="mr-4"></div>
      <div>
        <h1>Add to Cart · {price}</h1>
      </div>
    </button>
  );
};
export default Button;
