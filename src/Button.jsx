//dumma komponenter som styrs "utifrån" / styrs med props.

const styles = {
  color: {
    red: "bg-red-500 hover:bg-red-700",
    light: "bg-gray-500 hover:bg-gray-600",
    green: "bg-green-500 hover:bg-green-600",
  },
  size: {
    small: "text-sm px-3 py-1",
    medium: "text-base px-5 py-2",
    large: "text-lg px-10 py-3",
  },
  disabled: "bg-gray-400",
};

export default function Button(props) {
  const { title, color, size, disabled } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];
  const disabledClass = disabled ? styles.disabled : "";

  return (
    <button
      disabled={disabled}
      className={`shadow-xl  rounded-lg ${colorClass} ${sizeClass} ${disabledClass}`}
    >
      {title}
    </button>
  );
}
