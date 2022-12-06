import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { QueryClientProvider,QueryClient } from 'react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    </BrowserRouter>
    </QueryClientProvider>
   </StrictMode>
);
