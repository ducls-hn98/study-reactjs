export default function MyLabel(props) {
  return (
    <label htmlFor={props.name} className="text-sm leading-4 font-normal">
      {props.children}
    </label>
  );
}
