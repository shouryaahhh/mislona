import logo from '../assets/mislona-logo.png';

export default function MislonaHeader() {
  return (
    <div className="relative h-96 overflow-hidden rounded-b-[50px] bg-gradient-to-br from-[#efe8ff] via-white to-[#f7f3ff]">

      <div className="absolute top-6 right-8 z-20">
        <img
          src={logo}
          alt="Mislona"
          className="h-28 object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#d8d0ff"
            fillOpacity="0.8"
            d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,186.7C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

    </div>
  );
}