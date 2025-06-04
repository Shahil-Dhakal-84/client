export default function SelectField({ label, name, options = [], required = false, ...rest }) {
  return (
    <div className="mb-6">
      <label className="text-[#2B286D] text-xs font-medium block mb-3">{label}</label>
      <select
        name={name}
        required={required}
        className="text-[#2B286D] text-xs w-full p-2 border border-gray-300 rounded"
        {...rest}
      >
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
