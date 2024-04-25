import { useController } from "react-hook-form";

export default function MyRadioButton({ name, control, ...props }) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <div className="flex gap-2 items-center">
      <input
        {...field}
        type="radio"
        name={name}
        id={props.id}
        value={props.value}
        checked={props.value === field.value}
        className="w-[20px] h-[20px]"
      />
      <label
        htmlFor={props.id}
        className="text-sm leading-[21px] font-normal text-[#999]"
      >
        {props.children}
      </label>
    </div>
  );
}
