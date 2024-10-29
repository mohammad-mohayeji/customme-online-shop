import { Range, getTrackBackground } from "react-range";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react"
import { useState } from "react";

const STEP = 1;
const MIN = 0;
const MAX = 12500000;

export default function PriceRangeSlider() {
  const [values, setValues] = useState([0, 12500000]);

  const sliderStartingPrice = values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const sliderEndingPrice = values[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div>
      <Range values={values} step={STEP} min={MIN} max={MAX} rtl={true} onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px", display: "flex", width: "100%" }}>
            <div ref={props.ref} className="h-2 w-full rounded-lg" style={{ background: getTrackBackground({ values, colors: ["#ccc", "#A72F3B", "#ccc"], min: MIN, max: MAX, rtl: true,}), alignSelf: "center" }}>
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div {...props} key={props.key} style={{ ...props.style }} className="w-[18px] h-[18px] bg-white border border-solid border-neutral-500 rounded-full flex justify-center items-center">
            {index === 0 ? (
              <ArrowLeft2 className="w-3 h-3 text-neutral-700" />
            ) : (
              <ArrowRight2 className="w-3 h-3 text-neutral-700" />
            )}
          </div>
        )}
      />
      <div className="flex items-center justify-between">
        <span className="text-cp2 text-neutral-800">
          {sliderStartingPrice} تومان
        </span>
        <span className="text-cp2 text-neutral-800">
          {sliderEndingPrice} تومان
        </span>
      </div>
    </div>
  );
}
