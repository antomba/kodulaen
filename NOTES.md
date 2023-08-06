https://youtu.be/uluphP4xXD8?t=7750
https://mui.com/
https://react-chartjs-2.js.org/
npm start

##PROPS DESTRUCTURING
const SliderComponent = (props) => {
return (
<Slider
      defaultValue={props.defaultValue}
      min={props.min}
      max={props.max}
      aria-label="Default"
      valueLabelDisplay="auto"
    />
);
};

const SliderComponent = ({defaultValue, min, max}) => {
return (
<Slider
      defaultValue={defaultValue}
      min={min}
      max={max}
      aria-label="Default"
      valueLabelDisplay="auto"
    />
);
};
