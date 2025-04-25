import Dashboard from "../components/dashboard/dashboard";
import Curriculum1 from "./curriculum";

const Curriculum = () => {
  return (
    <div className="w-full min-h-screen bg-white/95">
      <div className="max-w-[1300px] mx-auto flex relative gap-4">
      <Dashboard />
      <Curriculum1 />
      </div>
    </div>
  );
};
export default Curriculum;
