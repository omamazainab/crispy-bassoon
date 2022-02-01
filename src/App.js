import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {Typography, CssBaseline} from '@mui/material';
import {theme} from "./theme"


function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Hi</Typography>
        <Typography variant="h2">Hi</Typography>
        <Typography variant="h3">Hi</Typography>
        <Typography variant="h4">Hi</Typography>
        <Typography variant="h5">Hi</Typography>
        <Typography variant="h6">Hi</Typography>
        <Typography variant="subtitle1">Hi</Typography>
        <Typography variant="subtitle2">Hi</Typography>
        <Typography variant="body1">Hi</Typography>
        <Typography variant="body2">Hi</Typography>
        <Typography variant="button">Hi</Typography>
        <Typography variant="caption">Hi</Typography>
        <Typography variant="overline">Hi</Typography>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
