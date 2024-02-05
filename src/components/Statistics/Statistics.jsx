import { groupNumber } from "../../data";
import css from "./Statistics.module.css";
import { BsArrowUpShort } from "react-icons/bs";
const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>Overview Statistics</span>
      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrrowIcon}>
            <BsArrowUpShort />
          </div>

          <div className={css.card}>
            <span>top item this month</span>
            <span>office</span>
          </div>
        </div>

        <div className={css.card}>
            <span>Profit</span>
            <span>${groupNumber()}</span>
        </div>

      </div>
    </div>
  );
};

export default Statistics;
