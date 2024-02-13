import {
  Grid,
  Paper,
  Chip,
  IconButton,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import dayjs, { Dayjs } from "dayjs";

export default function SpecificUncompletedTasks(props) {
  const { task, refetch } = props;
  const { mutate: completeTask } = useMutation({
    mutationKey: ["completeTask"],
    mutationFn: () => {
      axios
        .patch(`http://localhost:4500/tasks/completeTask/${task.TaskId}`)
        .then((response) => {
          console.log(response);
          toast.success(response.data.success);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
    },
  });
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        variant="outlined"
        sx={{
          padding: { xs: "10px", sm: "10px", md: "15px" },
          "&:hover": { borderColor: "#1777D2" },
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Chip label="Nurse" color="primary" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">{task.TaskTitle}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary">
              {task.TaskDescription}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider flexItem />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: "5px" }}>
            <Typography variant="body1" color="text.secondary">
              Assignee:
            </Typography>
            <Link
              style={{
                cursor: "pointer",
                color: "black",
              }}
              to="/staff/S532344"
            >
              {task.AssigneeName}
            </Link>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: "5px" }}>
            <Typography variant="body1" color="text.secondary">
              Assigner:
            </Typography>
            <Typography variant="body1">{task.AssignerName}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: "5px" }}>
            <Typography variant="body1" color="text.secondary">
              Assign Date:
            </Typography>
            <Typography variant="body1">{task.AssignDate}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: "5px" }}>
            <Typography variant="body1" color="text.secondary">
              Due Date:
            </Typography>
            <Typography variant="body1">{task.DueDate}</Typography>
          </Grid>
          <Grid item xs={12} textAlign="center" marginTop={1}>
            <Button
              variant="contained"
              onClick={() => {
                // const taskData = {
                //   completionTime: dayjs().format("YY-MM-DD HH:mm"),
                // };
                // completeTask(taskData);
                completeTask();
                setTimeout(function () {
                  refetch();
                  console.log("From Refetch");
                }, 200); //Time before execution
              }}
            >
              Complete
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
