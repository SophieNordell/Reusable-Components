const badges = {
  color: {
    gray: "bg-gray-300",
    blue: "bg-blue-200",
    light: "bg-gray-100",
  },
  size: {
    small: "text-sm w",
    medium: " text-md",
  },
};

function Badge(props) {
  const { title, color, size, icon } = props;

  const colorClass = badges.color[color];
  const sizeClass = badges.size[size];

  return (
    <div
      className={`flex py-2 items-center justify-center rounded-full p-3 shadow-lg  ${colorClass} ${sizeClass}`}
    >
      {title}
      {icon}
    </div>
  );
}

export default Badge;
