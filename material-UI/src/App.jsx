import React from "react";
import "./App.css";
import MUITypography from "./components/MUITypography";
import MUIButton from "./components/MUIButton";
import MUITextfield from "./components/MUITextfield";
import MUISelect from "./components/MUISelect";
import MUIRadioButton from "./components/MUIRadioButton";
import MUICheckbox from "./components/MUICheckbox";
import MUISwitch from "./components/MUISwitch";
import MUIRating from "./components/MUIRating";
import MUIAutocomplete from "./components/MUIAutocomplete";
import MUIBox from "./components/MUIBox";
import MUIStack from "./components/MUIStack";
import MUIGrid from "./components/MUIGrid";
import MUIPaper from "./components/MUIPaper";
import MUICard from "./components/MUICard";
import MUIAccordion from "./components/MUIAccordion";
import MUIImageList from "./components/MUIImageList";
import MUINavbar from "./components/MUINavbar";
import MUILink from "./components/MUILink";
import MUIBreadCrumbs from "./components/MUIBreadCrumbs";
import MUIDrawer from "./components/MUIDrawer";
import MUISpeedDial from "./components/MUISpeedDial";
import MUIBottomNavigation from "./components/MUIBottomNavigation";
import MUIAvatar from "./components/MUIAvatar";
import MUIBadge from "./components/MUIBadge";
import MUIList from "./components/MUIList";
import MUIChip from "./components/MUIChip";
import MUITooltip from "./components/MUITooltip";
import MUITable from "./components/MUITable";
import MUIAlert from "./components/MUIAlert";
import MUISnackbar from "./components/MUISnackbar";
import MUIDialog from "./components/MUIDialog";
import MUIProgress from "./components/MUIProgress";
import MUISkeleton from "./components/MUISkeleton";
import MUILoadingButton from "./components/MUILoadingButton";
import MUIDateTimePicker from "./components/MUIDateTimePicker";
import MUIDateRangePicker from "./components/MUIDateRangePicker";
import MUITabs from "./components/MUITabs";
import MUITimeline from "./components/MUITimeline";
import MUIMasonry from "./components/MUIMasonry";
import MUIResponsiveness from "./components/MUIResponsiveness";
import { ThemeProvider, colors, createTheme } from "@mui/material";

//visit: https://github.com/mui/material-ui/tree/next/docs/src

// customize theme
//ref: https://mui.com/material-ui/customization/how-to-customize/
//ref: https://mui.com/material-ui/customization/default-theme/
//ref: https://mui.com/material-ui/customization/color/
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MUITypography /> */}
        {/* <MUIButton /> */}
        {/* <MUITextfield /> */}
        {/* <MUISelect /> */}
        {/* <MUIRadioButton /> */}
        {/* <MUICheckbox /> */}
        {/* <MUISwitch /> */}
        {/* <MUIRating /> */}
        {/* <MUIAutocomplete /> */}

        {/* layouts --- components */}
        {/* <MUIBox /> */}
        {/* <MUIStack /> */}
        {/* <MUIGrid /> */}
        {/* <MUIPaper /> */}

        {/* <MUICard /> */}
        {/* <MUIAccordion /> */}
        {/* <MUIImageList /> */}

        {/* navigation related */}
        {/* <MUINavbar /> */}
        {/* <MUILink /> */}
        {/* <MUIBreadCrumbs /> */}
        {/* <MUIDrawer /> */}
        {/* <MUISpeedDial /> */}
        {/* <MUIBottomNavigation /> */}

        {/* data display components */}
        {/* <MUIAvatar/> */}
        {/* <MUIBadge /> */}
        {/* <MUIList/> */}
        {/* <MUIChip /> */}
        {/* <MUITable /> */}

        {/* assets */}
        {/* <MUITooltip /> */}
        {/* <MUIAlert /> */}
        {/* <MUISnackbar /> */}
        {/* <MUIDialog /> */}
        {/* <MUIProgress /> */}
        {/* <MUISkeleton /> */}
        {/* <MUILoadingButton /> */}
        {/* <MUIDateTimePicker /> */}
        {/* <MUIDateRangePicker /> */}
        {/* <MUITabs /> */}
        {/* <MUITimeline /> */}
        {/* <MUIMasonry /> */}
        <MUIResponsiveness />
      </div>
    </ThemeProvider>
  );
};

export default App;
