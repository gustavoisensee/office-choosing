import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Chosen from './pages/Chosen';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/chosen' element={<Chosen />} />
        <Route path='/' element={<Overview />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

