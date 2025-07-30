import Accordion from "../Component/Accordion";
import { Hero } from "../Component/Hero";
import Impact from "../Component/Impact";
import Newsleter from "../Component/Newsleter";
import ProcurementMap from "../Component/ProcurementMap";
import Indepth from "../Component/indepth";
import FoilRanking from "../assets/Ranking.png";

function Stateprocurement() {
  return (
    <>
      <main className="pt-30 pb-10  justify-center">
        <Hero
          button1="State of Procurement"
          heading="State of Procurement"
          text="Driving accountability and transparency across public procurement and governance through data-driven insights."
          button2="Download Report"
          dashboard={FoilRanking}
        />
        <Impact />
        <Indepth />
        <ProcurementMap />
        <Accordion />
        <Newsleter />
      </main>
    </>
  );
}

export default Stateprocurement;
