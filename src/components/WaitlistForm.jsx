import { useState } from "react";
import { addEmailToWaitlist } from "../services/waitlistService";

function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    try {
      const result = await addEmailToWaitlist(email);
      if (result.success) {
        setSuccessMsg("Successfully added to the waitlist!");
        e.target.reset();

        setTimeout(() => setSuccessMsg(""), 3000); // Clear success message after 3 seconds
      } else {
        setErrMsg(result.error || "Failed to join the waitlist.");

        setTimeout(() => setErrMsg(""), 3000); // Clear error message after 3 seconds
      }
    } catch (error) {
      setErrMsg("An unexpected error occurred.");
      setTimeout(() => setErrMsg(""), 3000); // Clear error message after 3 seconds
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        name="email"
        required
        disabled={loading}
        placeholder="Enter your email"
        className="w-full h-[60px] disabled:opacity-70 rounded-xl bg-[#181818] border border-white/10 px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FAF1CB]/60 transition"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full h-[60px] disabled:opacity-70 rounded-xl bg-[#FAF1CB] text-black font-semibold px-6 py-3 transition hover:bg-[#e8dfb6] active:scale-[0.98]"
      >
        {loading ? "Joinning..." : "Join Waitlist"}
      </button>
      {errMsg && (
        <div className="flex items-center gap-2 w-full rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
          <span>{errMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="flex items-center gap-2 w-full rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-600 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{successMsg}</span>
        </div>
      )}
    </form>
  );
}

export default WaitlistForm;
