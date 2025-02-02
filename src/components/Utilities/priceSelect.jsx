import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default function PriceSelect({ maxPrice, value, setValue }) {
  const rangeSelector = (value, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography
        id="range-slider"
        style={{
          margin: "auto",
          display: "block",
          width: "fit-content",
        }}
        gutterButtom
      >
        Выбор ценового диапазона:
      </Typography>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        step={100}
        // marks={marks}
        min={0}
        max={maxPrice}
      />
      Ваша выбраная цена от:
      {" " + value[0]}р. и до {value[1]}р.
    </div>
  );
}
