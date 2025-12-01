import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import CGUPage from './pages/CGUPage';
import HelpPage from './pages/HelpPage';
import PrivacyPage from './pages/PrivacyPage';
import DeleteAccountPage from './pages/DeleteAccountPage';

const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        {/* Routes publiques sans Header/Footer */}
        <Route path="/cgu" element={<CGUPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        
        {/* Routes publiques avec Header/Footer */}
        <Route path="/" element={<Layout><div>Home Page</div></Layout>} />
        
        {/* Routes protégées - Redirection automatique vers Auth0 si non authentifié */}
        <Route 
          path="/delete-account" 
          element={
            <ProtectedRoute>
              <DeleteAccountPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
