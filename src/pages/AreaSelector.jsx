import Area from "../components/Area";
import Location from "../components/Location";

export default function AreaSelector() {
  return (
    <div className='container mx-auto px-2'>
      <h1 className='text-3xl font-bold text-center text-header-text py-2 '>Area selector</h1>
      <Location />
      <Area />
    </div>
  );
}
