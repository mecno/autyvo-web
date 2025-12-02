import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { userService } from '@/services/userService';

const DeleteAccountPage: React.FC = () => {
  const { t } = useTranslation(['delete-account', 'common']);
  const { user, getAccessToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Validation de l'email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
    setError(null);
  };

  // Ouvrir le dialog de confirmation
  const handleOpenDialog = () => {
    if (!user?.email || email.toLowerCase() !== user.email.toLowerCase()) {
      setEmailError(true);
      setError(t('confirmation.error'));
      return;
    }
    setDialogOpen(true);
  };

  // Fermer le dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Supprimer le compte
  const handleDeleteAccount = async () => {
    setDialogOpen(false);
    setLoading(true);
    setError('');

    try {
      const token = await getAccessToken();
      if (!token) {
        throw new Error('No access token');
      }

      await userService.deleteAccount(token);
      setSuccess(true);
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error('Erreur lors de la suppression du compte:', err);
      setError(t('error.generic'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('pageTitle.deleteAccount', { ns: 'common' })}</title>
      </Helmet>

      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* En-tête */}
            <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
              {t('title')}
            </h1>
            <p className="text-gray-600 mb-8">
              {t('subtitle')}
            </p>

            {/* Afficher le succès */}
            {success && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={24} />
                <div>
                  <h3 className="font-semibold text-green-800 mb-1">{t('success.title')}</h3>
                  <p className="text-sm text-green-700">{t('success.message')}</p>
                </div>
              </div>
            )}

            {/* Afficher l'erreur */}
            {error && !success && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-red-800 mb-1">{t('error.title')}</h3>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="text-red-600 hover:text-red-800 ml-2"
                >
                  ×
                </button>
              </div>
            )}

            {/* Contenu principal (masqué si succès) */}
            {!success && (
              <>
                {/* Avertissement */}
                <div className="mb-8 border-2 border-orange-500 bg-orange-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="text-orange-600" size={28} />
                    <h2 className="text-xl font-bold text-orange-900">
                      {t('warning.title')}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {t('warning.content')}
                  </p>
                  <ul className="space-y-2">
                    {(t('warning.consequences', { returnObjects: true }) as string[]).map((consequence, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-orange-600 mr-2 font-bold">•</span>
                        <span>{consequence}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formulaire de confirmation */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-brand-secondary mb-4">
                    {t('confirmation.title')}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {t('confirmation.message')}
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder={t('confirmation.placeholder')}
                    disabled={loading}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all ${
                      emailError ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {emailError && (
                    <p className="text-sm text-red-600 mt-2">{t('confirmation.error')}</p>
                  )}
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => navigate('/')}
                    disabled={loading}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t('button.cancel')}
                  </button>
                  <button
                    onClick={handleOpenDialog}
                    disabled={loading || !email}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <Loader className="animate-spin mr-2" size={20} />
                        Suppression...
                      </>
                    ) : (
                      t('button.delete')
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Dialog de confirmation finale */}
      {dialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-red-600" size={32} />
              <h3 className="text-xl font-bold text-brand-secondary">
                {t('dialog.title')}
              </h3>
            </div>
            <p className="text-gray-700 mb-6">
              {t('dialog.message')}
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleCloseDialog}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('button.cancel')}
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                {t('dialog.confirmText')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteAccountPage;
