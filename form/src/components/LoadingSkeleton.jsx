export default function LoadingSkeleton(props) {
  return (
    <div
      className="skeleton"
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
      }}
    ></div>
  );
}
