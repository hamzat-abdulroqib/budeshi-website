import VisualizationCard from "../Component/VisualizationCard";
import VisualizationCard2 from "../Component/VisualizationCard2";
import VisualizationCard3 from "../Component/VisualizationCard3";

function Visualization() {
  return (
    <>
      <main className="min-vh-100 bg-white font-Montserrat mt-20">
        <VisualizationCard />
        <VisualizationCard2 />
        <VisualizationCard3 />
      </main>
    </>
  );
}

export default Visualization;
