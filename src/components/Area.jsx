import { useState } from "react";

export default function Area() {
  const [range, setRange] = useState(10);

  const handleRange = e => {
    setRange(e.target.value);
    console.log(e.target.value);
  };
  return (
    <section>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-header-text py-2'>Area</h2>
        <p className='font-normal text-light-text pr-2'>max 20 km</p>
      </div>

      <div className='slider-container'>
        <span className='edge-left'></span>
        <input className='w-full slider' type='range' name='km' id='km' min={1} max={20} value={range} onChange={handleRange} />
        <span className='edge-right'></span>
      </div>
    </section>
  );
}
