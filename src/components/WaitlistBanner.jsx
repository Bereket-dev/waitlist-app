// WaitlistBanner.jsx
import WaitlistForm from "./WaitlistForm";

function WaitlistBanner({ title, description, image }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col-reverse md:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16 text-white">
      {/* Left Side */}
      <div className="space-y-6 md:space-y-8 max-w-xl md:max-w-[500px] mx-auto md:mx-0 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
          {description}
        </p>

        <div className="pt-4 w-full max-w-sm mx-auto md:mx-0">
          <WaitlistForm />
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="flex justify-center md:justify-end w-full">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-2xl shadow-xl overflow-hidden">
          <img
            src={image?.src}
            alt={image?.label || "waitlist image"}
            className="w-full min-w-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default WaitlistBanner;
