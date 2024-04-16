export default function Input({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="p-5">
      <input
        type={type}
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
}
