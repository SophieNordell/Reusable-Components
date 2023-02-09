import { GrFormClose } from "react-icons/gr";

const warnings = {
  color: {
    error: "bg-red-200",
    warning: "bg-amber-200",
    good: "bg-green-200",
  },
  size: {
    small: "text-",
  },
};

export default function Alert(props) {
  const { title, color, icon, onDismiss } = props;

  const warningClass = warnings.color[color];

  return (
    <div
      className={`flex relative py-7 px-40 mr-6 font-mono text-lg text-gray-600 rounded-xl shadow-lg ${warningClass}`}
    >
      <div>
        <div className="absolute top-0 left-0 p-8">{icon}</div>
        <div className="flex">{title}</div>
      </div>
      <button className=" absolute top-0 right-0 p-2" onClick={onDismiss}>
        {<GrFormClose />}
      </button>
    </div>
  );
}
