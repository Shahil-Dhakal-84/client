export default function Button({ type = "button", children, onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#2B286D] text-[#F6F7FB] hover:bg-[#3C39A1] hover:text-[#F6F7FB] mb-3 px-4 py-2 rounded shadow-md transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
