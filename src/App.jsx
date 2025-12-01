import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ContactPage from './pages/ContactPage';
import HelpPage from './pages/HelpPage';
import TermsPage from './pages/legal/TermsPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import DeleteAccountPage from './pages/account/DeleteAccountPage';

const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Layout><div>Home Page</div></Layout>} />
        
        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Aide */}
        <Route path="/help" element={<HelpPage />} />
        
        {/* Pages légales */}
        <Route path="/legal/terms" element={<TermsPage />} />
        <Route path="/legal/privacy" element={<PrivacyPage />} />
        
        {/* Routes protégées - Compte utilisateur */}
        <Route 
          path="/account/delete" 
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
