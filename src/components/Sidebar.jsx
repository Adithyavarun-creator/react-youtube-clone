import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { categories } from "../utils/utils";

//const selectedCategory = "New";

const Sidebar = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column", sx: "row" },
      }}
    >
      {categories.map((c) => (
        <button
          className="category-btn"
          key={c.name}
          onClick={() => setSelectedCategory(c.name)}
          style={{
            background: c.name === selectedCategory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: c.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {c.icon}
          </span>
          <span
            style={{
              opacity: c.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {c.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
