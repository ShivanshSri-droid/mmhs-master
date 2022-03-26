import React from "react";
import DashboardCard from "../../Components/Cards/DashboardCards/DashboardCard";
import UnpaidCard from "../../Components/Cards/UnpaidCard/UnpaidCard";
import GraphCard from "../../Components/Cards/GraphCard/GraphCard";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__left_container">
        <div className="dashboard__left__top_container">
          <DashboardCard main="0" sub="Fees Paid" />
          <DashboardCard main="40,500" sub="Fees Overdue" />
        </div>
        <UnpaidCard />
      </div>
      <div className="dashboard__right_container">
        <GraphCard paid="₹0" due="₹40,500" />
      </div>
    </div>
  );
};

export default Dashboard;
