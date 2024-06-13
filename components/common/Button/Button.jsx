export default function Button({
  children,
  className,
  outlined = false,
  ...rest
}) {
  return (
    <button
      className={`capitalize flex items-center rounded-full ${className} ${
        outlined ? "text-[#EA323D] border-[#F17C84]" : ""
      }`}
      style={
        outlined
          ? {}
          : {
              background: "linear-gradient(90deg, #EC1119 0%, #E6788B 100%)",
            }
      }
      {...rest}
    >
      {children}
    </button>
  );
}
