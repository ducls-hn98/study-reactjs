import { useController } from "react-hook-form";

export default function MyCheckBox({ name, control, ...props }) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name={name}
        id={props.id}
        {...field}
        className="w-[26px] h-[26px] border border-[#2979FF]"
        checked={field.value}
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
