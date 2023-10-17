import logo from './logo.svg';
import './App.css';
import Page from './pages';
import { Layout as DashboardLayout } from './components/layouts/dashboard/layout';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { createTheme } from './theme';

function App() {
  const theme = createTheme(); 
  return (
    <>
     <ThemeProvider theme={theme}>
            <CssBaseline />
            <DashboardLayout>
      {<Page />}
    </DashboardLayout>
            </ThemeProvider>
    
    </>
   
  
  
  );
}

export default App;
