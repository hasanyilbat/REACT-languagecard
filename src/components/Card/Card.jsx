import Languages from "../Languages/Languages";
import "./Card.css";
import { languages } from "../../helper/data";

const Card = () => {
  return (
    <div className="container ">
      <h1>Languages</h1>

      <div className="card">
        {languages.map((item) => {
          const { name, img, options } = item;
          return <Languages name={name} img={img} options={options} />;
        })}
      </div>
    </div>
  );
};

export default Card;
