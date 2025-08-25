import Header from "../components/Header";
import WaitlistBanner from "../components/WaitlistBanner";
import exyread_app_img from "../assets/banner3.png";

function Home() {
  const waitlistImage = {
    src: exyread_app_img,
    label: "ExyRead app image",
  };
  const bannerTitle = "Hello, welcome to ExyRead.";
  const bannerDescription =
    "One app for smarter reading, note-taking, and AI-powered learning.";

  return (
    <div className="min-h-screen w-screen">
      <Header />
      <WaitlistBanner
        title={bannerTitle}
        description={bannerDescription}
        image={waitlistImage}
      />
    </div>
  );
}

export default Home;
