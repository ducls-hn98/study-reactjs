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
        className="w-full max-w-[512px] p-5 border border-[#7D6AFF] rounded-lg h-[59px] placeholder-[#000000] "
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
}
