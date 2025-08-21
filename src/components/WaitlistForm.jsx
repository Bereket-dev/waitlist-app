// WaitlistForm.jsx
import React from "react";

function WaitlistForm() {
  return (
    <form className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full h-[60px] rounded-xl bg-[#181818] border border-white/10 px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FAF1CB]/60 transition"
      />
      <button
        type="submit"
        className="w-full h-[60px] rounded-xl bg-[#FAF1CB] text-black font-semibold px-6 py-3 transition hover:bg-[#e8dfb6] active:scale-[0.98]"
      >
        Join Waitlist
      </button>
    </form>
  );
}

export default WaitlistForm;
