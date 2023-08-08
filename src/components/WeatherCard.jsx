import PlaceHolder from "../assets/icons/mapIcon.png";
import MapPin from "../assets/icons/mapPin.png";

export default function WeatherCard() {
  return (
    <section className='p-4 border-2 rounded-lg border-slider'>
      <div className='flex items-center'>
        <div>
          <img src={PlaceHolder} alt='' className='w-8 h-8 p-1 rounded-full border-[crimson] border' />
        </div>
        <div className='ml-2'>
          <p className='text-light-text uppercase mb-1'>Weather</p>
          <p className='font-semibold text-header-text'>placeholder</p>
        </div>
        <div className='ml-4'>
          <p className='text-light-text uppercase mb-1'>Description</p>
          <p className='font-semibold text-header-text'>placeholder</p>
        </div>
      </div>

      <div className='border border-input-divider my-4'></div>

      <div className='flex items-center gap-8 mb-4'>
        <div>
          <p className='text-light-text uppercase mb-1'>Sunset</p>
          <p className='font-semibold text-header-text'>placeholder</p>
        </div>
        <div>
          <p className='text-light-text uppercase mb-1'>Sunrise</p>
          <p className='font-semibold text-header-text'>Placeholder</p>
        </div>
        <div>
          <p className='text-light-text uppercase mb-1'>Location</p>
          <p className='font-semibold text-header-text flex items-center gap-1'>
            <img src={MapPin} alt='' />
            Placeholder
          </p>
        </div>
      </div>

      <div className='flex items-center gap-8 mb-2'>
        <div>
          <p className='text-light-text uppercase mb-1'>Temperature</p>
          <p className='font-semibold text-header-text'>placeholder</p>
        </div>
        <div>
          <p className='text-light-text uppercase mb-1'>Feels like</p>
          <p className='font-semibold text-header-text'>placeholder</p>
        </div>
      </div>

      <div className='flex justify-end mb-2'>
        <p className='text-light-text'>70% umidity</p>
      </div>
      <div className='w-full bg-input-divider h-1 rounded-lg'>
        <div className={`w-${32} bg-slider h-1 rounded-lg`}></div>
      </div>
    </section>
  );
}
