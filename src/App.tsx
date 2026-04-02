import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TransportPage } from './pages/TransportPage';
import { LocationPage } from './pages/LocationPage';
import { CarDetailPage } from './pages/CarDetailPage';
export function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/location/:id" element={<CarDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </div>);
}