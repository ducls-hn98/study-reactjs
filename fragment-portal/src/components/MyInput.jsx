import { useController } from "react-hook-form";

export default function MyInput({ name, control, ...props }) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <input
      name={name}
      {...field}
      {...props}
      className="w-[368px] h-12 rounded-lg bg-[#E7ECF3] pl-[14px]"
    />
  );
}
