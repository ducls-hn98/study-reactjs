export default function MyLabel(props) {
  return (
    <label htmlFor={props.for} className="text-sm leading-[21px] font-medium">
      {props.children}
    </label>
  );
}
