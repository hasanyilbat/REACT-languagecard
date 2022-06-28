import { useState } from "react";
import "./Languages.css";

const Languages = ({ data }) => {
  const [isFlipped, setisFlipped] = useState(true);

  return data.map((item, index) => {
    const { name, img, options } = item;
    return (
      <div
        onClick={() => setisFlipped(!isFlipped)}
        className="lang-item"
        key={index}
      >
        <div>
          {isFlipped && (
            <div>
              {" "}
              <img src={img} alt="js" />
              <h3>{name}</h3>
            </div>
          )}
          {!isFlipped && (
            <ul>
              {options.map((item) => {
                return <li className="info">{item}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    );
  });
};

export default Languages;
