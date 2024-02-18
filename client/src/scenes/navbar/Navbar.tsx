import FlexBetween from "@/components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.2rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* left side */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>
      {/* right side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: "#d0fcf4" } }}>
          <Link
            to="/"
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
            onClick={() => setSelected("dashboard")}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: "#d0fcf4" } }}>
          <Link
            to="/predictions"
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
            onClick={() => setSelected("predictions")}
          >
            Prdictions
          </Link>
        </Box>
        <Box></Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
