export default function InputField({ label, icon, ...props }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm font-medium text-[rgb(1,33,105)] mb-2">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none">
            <span className="w-5 h-5 text-[rgb(1,33,105)] opacity-60">
              {icon}
            </span>
          </div>
        )}
        <input
          className={`w-full ${icon ? 'pl-10' : 'pl-3'} pr-3 py-3 text-[rgb(1,33,105)] bg-[#F6F7FB] outline-none border border-[#F6F7FB] focus:border-[rgb(1,33,105)] focus:bg-white shadow-sm rounded-lg transition-all duration-200 placeholder-[rgb(1,33,105)] placeholder-opacity-50`}
          {...props}
        />
      </div>
    </div>
  );
}