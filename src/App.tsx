import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/blog/BlogPage';
import { ProPage } from './pages/pro';
import { IaPage } from './pages/technologies';
import TermsPage from './pages/legal/TermsPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import DeleteAccountPage from './pages/account/DeleteAccountPage';

const App = () => {
  return (
    <Routes>
      {/* Route wrapper avec Layout - Toutes les routes enfants auront Header/Footer */}
      <Route element={<Layout />}>
        
        {/* Page d'accueil */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Pages publiques */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pro" element={<ProPage />} />
        <Route path="/ia" element={<IaPage />} />
        
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

        {/* Gestion 404 - Redirection vers l'accueil */}
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Route>
    </Routes>
  );
};

export default App;
