import Dashboard from "./components/dashboard/dashboard";
import Welcome from "./components/welcome/welcome";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white/95">
      <div className="max-w-[1300px] mx-auto flex relative gap-4">
      <Dashboard />
      <Welcome />
      </div>
    </div>
  );
};

export default Home;
