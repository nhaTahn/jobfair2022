import React from "react";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid container
      rowSpacing={0} columnSpacing={0}
      sx={{
        width: {
          md: '100%',
        },
        height: {
          md: '120px',
        },
        backgroundImage: "url('/images/header2.png')",
        backgroundSize: '35% ',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
    </Grid>
  )
}

export default Header;