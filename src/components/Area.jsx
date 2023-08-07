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

      <div>
        <input className='w-full' type='range' name='km' id='km' min={0} max={20} value={range} onChange={handleRange} />
        {range}

        <div className='h-20' id='map'></div>
      </div>
    </section>
  );
}
