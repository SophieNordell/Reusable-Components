import Pic from "./assets/bild.jpg";

function Card(props) {
  const { imgSrc, href, imgAlt } = props;

  return (
    <div className="flex justify-center p-10 ">
      <a target="_blank" href={href}>
        <div className="flex flex-col p-10 justify-center border border-gray-200 rounded-md shadow-xl">
          <img className="abolute inset-x-0 w-80 " src={imgSrc} alt={imgAlt} />
          <h5 className="flex font-mono text-xl mt-2 tex text-gray-600 ">
            Detta är ett Card
          </h5>
          <p className="text-gray-500">Ett card med en bild!</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
