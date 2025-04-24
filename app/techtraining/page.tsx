import Dashboard from "../components/dashboard/dashboard";
import Tech1 from "./tech";


const Techtraining = () => {
  return (
    <div className="w-full min-h-screen bg-white/95">
      <div className="max-w-[1300px] mx-auto flex relative gap-4">
      <Dashboard />
      <Tech1/>
      </div>
    </div>
  );
};
export default Techtraining;
