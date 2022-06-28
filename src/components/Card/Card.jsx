import Languages from "../Languages/Languages";
import "./Card.css";
import { languages } from "../../helper/data";

const Card = () => {
  return (
    <div className="container">
      <h1>Languages</h1>
      <div className="card">
        <Languages data={languages} />
      </div>
    </div>
  );
};

export default Card;
