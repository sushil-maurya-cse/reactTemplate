import {
  Add,
  Flare,
  LinkedIn,
  LocationOn,
  MoreHoriz,
  Twitter,
} from "@mui/icons-material";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import * as React from "react";
import { ProfileQuery } from "./__generated__/ProfileQuery.graphql";

type ProfileProps = {
  user: NonNullable<ProfileQuery["response"]["user"]>;
};

export default function Profile(props: ProfileProps): JSX.Element {
  const { user } = props;

  return (
    <React.Fragment>
      <Container
        sx={{
          py: 5,
          display: "grid",
          gridTemplateColumns: "200px auto",
          gridGap: "1.5rem",
        }}
        maxWidth="sm"
      >
        <Box sx={{ background: "#eee", aspectRatio: "1/1", borderRadius: 1 }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* NAME */}
          <Typography
            sx={{
              display: "inline-flex",
              alignItems: "flex-end",
              mb: 1,
              flexGrow: 1,
              fontWeight: 500,
            }}
            variant="h1"
          >
            {user.name}
          </Typography>

          {/* LOCATION, SOCIAL, WEBSITE */}
          <Typography
            sx={{ position: "relative", color: "text.secondary", mb: 2 }}
            variant="body2"
          >
            &nbsp;
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                position: "absolute",
                left: 0,
                top: 0,
                right: -30,
                marginRight: -30,
                "&>*": { mr: 1 },
              }}
            >
              <LocationOn sx={{ mr: 0.5 }} fontSize="small" />
              <Box component="span">St. Petersburg, Russia (GMT+3)</Box>
              <LinkedIn fontSize="small" />
              <Twitter fontSize="small" />
              <Link
                sx={{ "&:hover": { textDecoration: "underline" } }}
                href="https://tarkus.me"
                color="inherit"
                children="tarkus.me"
              />
            </Box>
          </Typography>

          <Typography sx={{ position: "relative", mb: 3 }}>
            &nbsp;
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                position: "absolute",
                left: 0,
                top: 0,
                right: -30,
                marginRight: -30,
              }}
              component="span"
            >
              <Flare sx={{ mr: 1 }} />
              <span>Software Engineering • Product Management</span>
            </Box>
          </Typography>

          {/* ACTION BUTTONS */}
          <Box
            sx={{
              display: "grid",
              gridGap: "1rem",
              gridTemplateColumns: "min-content auto",
              justifyContent: "flex-start",
            }}
          >
            <Button variant="contained" startIcon={<Add />}>
              Follow
            </Button>
            <Button variant="outlined">
              <MoreHoriz />
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
