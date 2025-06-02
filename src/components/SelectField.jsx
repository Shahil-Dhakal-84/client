export default function SelectField({ label, name, value, onChange, required, options }) {
  return (
    <label className="form-label">
      {label}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-select"
      >
        {options.map(({ value: val, label: text, disabled }, i) => (
          <option key={i} value={val} disabled={disabled}>
            {text}
          </option>
        ))}
      </select>
    </label>
  );
}
