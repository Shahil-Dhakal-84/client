export default function FormLayout({ title, children }) {
  return (
    <div className="bg-[#2B286D] min-h-screen flex items-center justify-center relative">
      <form className="custom-scrollbar bg-[#F6F7FB] px-6 py-3 rounded-lg shadow-lg w-full max-w-sm h-[80vh] overflow-y-auto">
        <h1 className="text-[#2B286D] text-center text-xl font-bold mb-4">{title}</h1>
        {children}
      </form>
    </div>
  );
}