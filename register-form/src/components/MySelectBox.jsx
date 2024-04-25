import { useController } from "react-hook-form";

export default function MySelectBox({ name, control, ...props }) {
  const { field } = useController({
    name,
    control,
  });
  return (
    <select
      name={name}
      id={props.id}
      className="w-[300px] h-[50px] rounded-[4px] border border-gray-300 pl-[15px] pr-[9px]"
      defaultValue={field.defaultValue}
      {...field}
    >
      {props.children}
    </select>
  );
}
