import './App.css';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import MainMenu from './components/MainMenu';
import Meals from './components/Meals';
import Plans from './components/Plans';
import { useEffect, useState } from 'react';

import { CatalogProvider } from './providers/CatalogProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#79000e',
    },
    text: {
      secondary: '#ffffff',
    },
  },
});

const AppPage = () => (
  <Container>
    <MainMenu />
    <Outlet />
  </Container>
);

function App() {
  const [catalog, setCatalog] = useState({lastUpdate: 0, meals: [], plans: []});

  useEffect(() => {
    console.log(window);
    window.electron.ipcRenderer.readCatalog();
  }, [catalog.lastUpdate]);

  window.electron.ipcRenderer.on('read-catalog', (args) => {
    console.log('read-catalog event received', args)
    setCatalog(args);
  })

  return (
    <ThemeProvider theme={theme}>
      <CatalogProvider value={catalog}>
        <Router>
          <Routes>
            <Route path="/" element={<AppPage />}>
              <Route path="/meals" element={<Meals />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </CatalogProvider>
    </ThemeProvider>
  );
}

export default App;
