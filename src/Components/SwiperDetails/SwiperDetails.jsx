import React from "react";
import img from "../Images/model1.png";
const SwiperDetails = ({ testiMonialDetail }) => {
  const { img } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div class="item1">
      <div class="shadow-effect1">
        <img class="img-circle1" src={img} alt={img} />
      </div>
    </div>
  );
};

export default SwiperDetails;
