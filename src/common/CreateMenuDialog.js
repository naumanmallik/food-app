import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Grid,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";

const CreateMenuDialog = ({ open, handleClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const createMenu = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <form onSubmit={handleSubmit(createMenu)} autoComplete="off">
        <DialogTitle>Create New Menu</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} direction="column" sx={{ mt: 1 }}>
            <Grid item>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    id="name"
                    size="small"
                    label="Name"
                    variant="outlined"
                    helperText={
                      errors?.name?.type === "required" &&
                      "This field is required"
                    }
                    error={errors?.name?.type === "required"}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                name="description"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    id="description"
                    size="small"
                    label="Description"
                    variant="outlined"
                    helperText={
                      errors?.description?.type === "required" &&
                      "This field is required"
                    }
                    error={errors?.description?.type === "required"}
                  />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateMenuDialog;
