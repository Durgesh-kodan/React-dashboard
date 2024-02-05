import React from "react";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>

            <div className={css.durationButton}>
              <select>
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>Cards</div>
        </div>
      </div>

      <div className={css.orders}>raja</div>
    </div>
  );
};


export default Dashboard;