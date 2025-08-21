// WaitlistBanner.jsx
import WaitlistForm from "./WaitlistForm";

function WaitlistBanner({ title, description, image }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col-reverse md:flex-row md:items-center md:justify-center gap-12 md:gap-16 text-white">
      {/* Left Side */}
      <div className="space-y-6 md:space-y-8 max-w-xl md:max-w-[500px] mx-auto md:mx-0 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
          {description}
        </p>

        <div className="pt-2 w-full max-w-sm mx-auto md:mx-0">
          <WaitlistForm />
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="flex justify-center md:justify-end">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-lg">
          <img
            src={image?.src}
            alt={image?.label || "waitlist image"}
            className="w-[110%] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default WaitlistBanner;
