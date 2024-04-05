import { Stack } from "@mui/material";
import PropTypes from "prop-types";

export function Main({ children }) {
  return <Stack padding="92px 32px 70px 32px">{children}</Stack>;
}
Main.propTypes = {
  children: PropTypes.node.isRequired,
};
