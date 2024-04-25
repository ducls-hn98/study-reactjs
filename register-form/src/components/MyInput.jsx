import { useController } from "react-hook-form";

export default function MyInput({ name, control, ...props }) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <input
      className="w-[300px] h-[50px] rounded-[4px] border border-gray-300 focus:border-[#2979FF]  p-[15px] focus-visible:border-[#2979FF]"
      {...field}
      {...props}
    />
  );
}
