export default function SelectField({ label, options = [], ...props }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-700 mb-1">{label}</label>
      <select
        className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(1,33,105)] text-sm"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
