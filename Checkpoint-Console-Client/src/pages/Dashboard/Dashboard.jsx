import TopBar from "../../components/TopBar/TopBar";
import StatusCard from "../../components/StatusCard/StatusCard";
import CommsPanel from "../../components/CommsPanel/CommsPanel";

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <StatusCard />
      <CommsPanel />
    </div>
  );
};

export default Dashboard;
