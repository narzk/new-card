export default function Input({ placeholder, label }) {
  return (
    <label>
        {label}
      <input placeholder={placeholder} />
    </label>
  );
}
