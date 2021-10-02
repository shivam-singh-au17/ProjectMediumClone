import React from "react";
import "./Navbar_s.css";

import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Navbar_s = () => {
  return (
    <div className="navbar-s">
      <div className="navbar-main">
        <div className="navbar-right">
          <a href="/">Naveen</a>
          <a href="/">Lists</a>
          <a href="/">About</a>
        </div>
        <div className="search-div">
          <div>
            {" "}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <div className="img-div">
            {" "}
            {/* <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/Chabon.png"
              alt="Avatar"
            /> */}
            <Avatar alt="" src="/static/images/avatar/1.jpg" />
            <img
              src="https://miro.medium.com/max/4000/1*psYl0y9DUzZWtHzFJLIvTw.png"
              alt=""
              width="80"
              height="80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
