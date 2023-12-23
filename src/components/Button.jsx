function Button({ children, variant = false, ...rest }) {
  return (
    <button
      className={`${
        variant ? " bg-slate-500 rounded-2xl mb-4" : "bg-slate-400 rounded-md"
      } text-sm  px-4 py-2  hover:scale-105 `}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
