export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-[rgb(1,33,105)] text-white py-2 px-4 rounded-md hover:bg-blue-900 transition text-sm font-medium"
      {...props}
    >
      {children}
    </button>
  );
}