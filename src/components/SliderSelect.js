import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  console.log(data);
  return (
    <>
      <SliderComponent
        label="Kinnisvara maksumus"
        currency="€"
        min={0}
        max={500000}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={5000}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        amount={data.homeValue}
      />
      <SliderComponent
        label="Sissemakse"
        currency="€"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={5000}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        amount={data.downPayment}
      />
      <SliderComponent
        label="Laen"
        currency="€"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={5000}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Intressimäär"
        currency="%"
        min={0}
        max={10}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e, value) => setData({ ...data, interestRate: value })}
        amount={data.interestRate}
      />
    </>
  );
};

export default SliderSelect;
