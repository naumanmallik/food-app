import classes from "./Dashboard.module.css";
import MenuCard from "./MenuCard";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      {[1, 2, 3, 4, 5].map((val, index) => (
        <MenuCard index={index} />
      ))}
    </div>
  );
};

export default Dashboard;
