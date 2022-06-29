import { useState } from "react";
import "./Languages.css";

const Languages = ({ img, name, options }) => {
  const [isFlipped, setisFlipped] = useState(false);

  return (
    <div onClick={() => setisFlipped(!isFlipped)} className="lang-item">
      <div>
        {!isFlipped && (
          <div>
            {" "}
            <img src={img} alt="js" />
            <h3>{name}</h3>
          </div>
        )}
        {isFlipped && (
          <ul>
            {options.map((item) => {
              return <li className="info">{item}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Languages;
