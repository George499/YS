import React, { useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Nouislider from "nouislider-react";
import { Input } from "reactstrap";

const PriceSlider = ({ top }) => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);

  const priceSlider = (render, handle, value, un, percent) => {
    setPriceMin(value[0]);
    setPriceMax(value[1]);
  };

  return (
    <>
      {/* <Range
        min={priceMin}
        max={priceMax}
        defaultValue={[priceMin, priceMax]}
        handle={priceSlider(value)}
      /> */}
      <Nouislider
        key={2}
        range={{ min: 1000, max: 30000 }}
        start={[1000, 10000]}
        onUpdate={priceSlider}
        connect
      />
      <div className="nouislider-values mb-4 ">
        <div className="min d-flex align-items-end">
          <p className="m-0 pr-2">от</p>
          <div className="mr-2">
            <Input placeholder={priceMin} />
          </div>
        </div>
        <div className="max d-flex align-items-end">
          <p className="m-0 pr-2">до</p>
          <Input placeholder={priceMax} />
        </div>
      </div>
    </>
  );
};

export default PriceSlider;