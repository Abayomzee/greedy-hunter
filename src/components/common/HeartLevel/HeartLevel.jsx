import "./heartLevel.scss";
import { images } from "./../../../utils/images";

const HeartLevel = () => {
  return (
    <div className="heartLevel">
      <img src={images.heart} alt="" className="heartLevel__heart" />
      <div className="heartLevel__level">
        <div className="heartLevel__level-rate"></div>
      </div>
    </div>
  );
};

export default HeartLevel;
