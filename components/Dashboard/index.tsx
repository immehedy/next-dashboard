import Histogram from "./Charts/Histogram";
import Geo from "./Charts/Geo";
import Pie from "./Charts/Pie";
import OrderTable from "./Tables/OrderTable";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-2 ">
      <div className="col-span-2 space-y-2">
      <Geo/>
      <OrderTable/>
      </div>
      <div className="space-y-2">
        <Pie/>
        <Histogram/>
      </div>
    </div>
  );
};

export default Dashboard;
