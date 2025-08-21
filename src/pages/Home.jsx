import Header from "../components/Header";
import WaitlistBanner from "../components/WaitlistBanner";
import exyread_app_img from "../assets/exyread_app_img.png";

function Home() {
  const waitlistImage = {
    src: exyread_app_img,
    label: "ExyRead app image",
  };
  const bannerTitle = "Hello, welcome to ExyRead.";
  const bannerDescription =
    "Reading with Ai chat, Note taking, progress tracking, organizing files.";

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
