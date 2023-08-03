import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { Searchbar } from "./";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#000",
        position: "sticky",
        top: 0,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Searchbar />
    </Stack>
  );
};

export default Navbar;
