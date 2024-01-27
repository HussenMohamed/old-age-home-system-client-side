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
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
export const OverviewFamilyMembers = (props) => {
  const { family, residents, sx } = props;

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
            <Title>Family Members</Title>

            <Typography variant="h4">{family}</Typography>
            <Typography color="text.secondary">
              For {residents} Residents
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <FamilyRestroomIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewFamilyMembers.propTypes = {
  value: PropTypes.number,
  sx: PropTypes.object,
};
