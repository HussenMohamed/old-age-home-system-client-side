import {
  Grid,
  Paper,
  Chip,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import { Link } from "react-router-dom";

export default function AllCompletedTasks(props) {
  const { task } = props;
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
          <Grid item xs={12}>
            <Chip
              label={task.AssigneeRoleName}
              color="primary"
              variant="outlined"
            />
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
          <Grid item xs={12} sx={{ display: "flex", gap: "5px" }}>
            <Typography variant="body1" color="text.secondary">
              Completed at:
            </Typography>
            <Typography variant="body1">{task.CompletionTime}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
      </Paper>
    </Grid>
  );
}
