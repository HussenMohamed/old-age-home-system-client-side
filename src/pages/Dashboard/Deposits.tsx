import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Users Requests</Title>
      <Typography component="p" variant="h4" marginBottom={2} marginTop={1}>
        12 Requests
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Pending Requests On This Week
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Total Requests
        </Link>
      </div>
    </React.Fragment>
  );
}
