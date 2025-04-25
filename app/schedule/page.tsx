import Dashboard from "../components/dashboard/dashboard";
import Schedule1 from "./schedule";

const Schedule = () => {
  return (
    <div className="w-full min-h-screen bg-white/95">
      <div className="max-w-[1300px] mx-auto flex relative gap-4">
      <Dashboard />
      <Schedule1 />
      </div>
    </div>
  );
};
export default Schedule;
