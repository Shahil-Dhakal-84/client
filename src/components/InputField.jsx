export default function InputField({ label, type = "text", name, value, onChange, placeholder, required, min, max, step, readOnly }) {
  return (
    <label className="form-label">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        step={step}
        readOnly={readOnly}
        className="form-input"
      />
    </label>
  );
}
