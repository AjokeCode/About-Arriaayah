import Dashboard from "../components/dashboard/dashboard";
import Manhaj1 from "./manhaj1";

const Manhaj = () => {
  return (
    <div className="w-full min-h-screen bg-white/95">
      <div className="max-w-[1300px] mx-auto flex relative gap-4">
      <Dashboard />
      <Manhaj1 />
      </div>
    </div>
  );
};
export default Manhaj;
