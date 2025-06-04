export default function InputField({ label, name, type = "text", required = false, ...rest }) {
  return (
    <div className="mb-6">
      <label className="text-[#2B286D] text-xs font-medium block mb-3">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full text-xs p-2 border border-gray-300 rounded"
        {...rest}
      />
    </div>
  );
}
