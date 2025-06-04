import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Internships from "./components/Internships";
import Events from "./components/Events";
import Cofounder from "./components/Cofounder";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />

      {/* About Us Section */}
      <AboutUs />

      {/* Internship Section */}
      <Internships />

      {/* Events Section */}
      <Events />

      {/* AI Co-Founder Section */}
      <Cofounder />
    </div>
  );
}
