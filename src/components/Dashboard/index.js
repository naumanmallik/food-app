import { Button, Container } from "@mui/material";
import classes from "./Dashboard.module.css";
import MenuCard from "./MenuCard";

const Dashboard = () => {
  return (
    <>
      <Container maxWidth="lg" className={classes.btnRoot}>
        <Button variant="outlined">Create New Menu</Button>
      </Container>
      <div className={classes.container}>
        {[1, 2, 3, 4, 5, 6, 7].map((val, index) => (
          <MenuCard index={index} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
