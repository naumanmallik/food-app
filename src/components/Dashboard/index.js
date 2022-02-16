import * as React from "react";
import { Button, Container } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateMenuDialog from "../../common/CreateMenuDialog";
import classes from "./Dashboard.module.css";
import MenuCard from "./MenuCard";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = () => setOpen((prev) => !prev);

  return (
    <>
      <Container maxWidth="lg" className={classes.btnRoot}>
        <Button variant="outlined" onClick={handleOpenDialog} startIcon={<AddOutlinedIcon />}>
          Create New Menu
        </Button>
      </Container>
      <div className={classes.container}>
        {[1, 2, 3, 4, 5, 6, 7].map((val, index) => (
          <MenuCard index={index} />
        ))}
      </div>
      <CreateMenuDialog open={open} handleClose={handleOpenDialog} />
    </>
  );
};

export default Dashboard;
