import MyButton from "./MyButton";




function renderFigcaption({ data, figcaption }) {
  switch (figcaption) {
    case true:
      return (
        <div className="figc1">
          <p className="text-white f-p">Rep your School</p>
          <h3 className="text-white font-h3 f-h3">Dunk Madness</h3>
          <div className="flex">
            <MyButton colorBlack={true}>{data.text}</MyButton>
          </div>
        </div>
      );
    case false:
      return (
        <div className="trending-text">
          <h2 className="font-h4">{data.text}</h2>
        </div>
      );
    default:
      return null;

  }
}



export function CardSect({data, figcaption}) {
  

  return (
    <li>
      <figure className="relative">
        <div className="img-wrapper">
          <img src={data.img}/>
        </div>
        {renderFigcaption({ data, figcaption })}
        <a href={data.href} className="fig-li-cover">
          {" "}
        </a>
      </figure>
    </li>
  );
}

CardSect.propTypes = {
  data: Object,
  figcaption: Boolean
}

export default CardSect;