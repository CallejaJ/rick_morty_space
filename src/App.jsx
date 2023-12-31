import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import PrivateRoute from './components/Router/PrivateRoute';
import PublicRoute from './components/Router/PublicRoute';


import Layout from './Layout';
import Landing from './Views/Landing/Landing';
import LoginFormik from './Views/LoginFormik/LoginFormik';
import Chars from './Views/Chars/Chars';
import CharDetails from './Views/CharDetails/CharDetails';

import './App.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { purple, green } from '@mui/material/colors';
// los que están entre llaves son los que no están exportados por defecto



const purpleTheme = createTheme({
  palette: {
    primary: {
      light: purple[400],
      main: purple[600],
      dark: purple[800],
    },
    secondary: {
      light: green[400],
      main: green[600],
      dark: green[800],
    },
    text: {
      primary: "#aa00ff",
      secondary: ""
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },

  MUIPagination: {
    styleOverrides: {
      root: {
        button: {
          color: '#884032',
        },
      },
    },
  }
});

export default function App() {

  return (
    <BrowserRouter>

      <AuthContextProvider>

        <ThemeProvider theme={purpleTheme}>
          <CssBaseline />

          <Routes>
            <Route path="/" element={<Landing />} />

            {/* Rutas públicas */}
            <Route element={<PublicRoute />} >
              <Route path="/login" element={<LoginFormik />} />
            </Route>

            {/* Rutas privadas */}
            <Route path="/chars" element={<PrivateRoute />}>
              <Route element={<Layout />} >
                <Route index element={<Chars />} />
                <Route path=":id" element={<CharDetails />} />
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>

      </AuthContextProvider>

    </BrowserRouter >
  );
}

