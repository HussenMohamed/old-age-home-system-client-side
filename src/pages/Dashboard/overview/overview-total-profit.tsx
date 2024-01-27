import PropTypes from "prop-types";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Title from "../Title";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
export const OverviewTotalProfit = (props) => {
  const { total, occupied, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Title>Occupied Rooms</Title>

            <Typography variant="h4">{occupied}</Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              From Total {total} Rooms
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              height: 56,
              width: 56,
            }}
          >
            <MeetingRoomIcon />
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTotalProfit.propTypes = {
  total: PropTypes.number,
  occupied: PropTypes.number,
  sx: PropTypes.object,
};
