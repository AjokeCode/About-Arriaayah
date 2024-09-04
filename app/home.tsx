import Dashboard from "./components/dashboard/dashboard";
import Welcome from "./components/welcome/welcome";

const Home = () => {
  return (
    <div className="w-full flex">
      <Dashboard />
      <Welcome />
    </div>
  );
};

export default Home;
