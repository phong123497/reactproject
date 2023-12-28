import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityIcon from "@mui/icons-material/Security";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme;
  const colors = tokens(theme.palette.mode);

  const columns = [{ field: "id" }, {}, {}, {}, {}];
};
export default Team;
