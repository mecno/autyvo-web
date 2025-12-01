import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListItem, ListItemText } from '@mui/material';
import { 
  PageContainer, 
  PagePaper, 
  PageTitle, 
  PageSubtitle, 
  ContentBox, 
  SectionTitle,
  BodyText,
  SecondaryText
} from '../components/ui';
import { CARDOC_CONTACT_EMAIL, CARDOC_SUPPORT_EMAIL } from '../constants';

const CGUPage = () => {
  const { t } = useTranslation(['cgu', 'common']);

  // Mise à jour du titre de la page
  useEffect(() => {
    document.title = t('common:pageTitle.cgu');
  }, [t]);

  const renderSection = (sectionKey) => {
    const section = t(`cgu:${sectionKey}`, { 
      returnObjects: true,
      contactEmail: CARDOC_CONTACT_EMAIL,
      supportEmail: CARDOC_SUPPORT_EMAIL,
    });
    
    return (
      <ContentBox variant="section" key={sectionKey}>
        <SectionTitle>{section.title}</SectionTitle>
        
        {section.content && <BodyText sx={{ mb: 2 }}>{section.content}</BodyText>}
        
        {section.contact && <BodyText>{section.contact}</BodyText>}
        
        {section.definitions && (
          <List sx={{ mt: 1 }}>
            {Object.values(section.definitions).map((def, idx) => (
              <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                <ListItemText 
                  primary={def}
                  primaryTypographyProps={{ variant: 'body1' }}
                />
              </ListItem>
            ))}
          </List>
        )}
        
        {section.deletion && <BodyText sx={{ mt: 2 }}>{section.deletion}</BodyText>}
        
        {section.intro && (
          <>
            <BodyText sx={{ mb: 1 }}>{section.intro}</BodyText>
            {section.features && (
              <List sx={{ mt: 1 }}>
                {Object.values(section.features).map((feature, idx) => (
                  <ListItem key={idx} sx={{ py: 0.5, px: 0, pl: 2 }}>
                    <ListItemText 
                      primary={`• ${feature}`}
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
            {section.prohibitions && (
              <List sx={{ mt: 1 }}>
                {Object.values(section.prohibitions).map((prohibition, idx) => (
                  <ListItem key={idx} sx={{ py: 0.5, px: 0, pl: 2 }}>
                    <ListItemText 
                      primary={`• ${prohibition}`}
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </>
        )}
        
        {section.security && (
          <>
            <BodyText sx={{ mb: 2 }}>{section.security}</BodyText>
            {section.retention && <BodyText>{section.retention}</BodyText>}
          </>
        )}
        
        {section.notifications && (
          <>
            <BodyText sx={{ mb: 2 }}>{section.notifications}</BodyText>
            {section.preferences && <BodyText>{section.preferences}</BodyText>}
          </>
        )}
        
        {section.responsibility && (
          <>
            <BodyText sx={{ mb: 2 }}>{section.responsibility}</BodyText>
            {section.commitment && <BodyText>{section.commitment}</BodyText>}
          </>
        )}
        
        {section.service && (
          <>
            <BodyText sx={{ mb: 2 }}>{section.service}</BodyText>
            {section.user && <BodyText>{section.user}</BodyText>}
          </>
        )}
        
        {section.ownership && (
          <>
            <BodyText sx={{ mb: 2 }}>{section.ownership}</BodyText>
            <BodyText sx={{ mb: 2 }}>{section.prohibition}</BodyText>
            <BodyText sx={{ mb: 2 }}>{section.license}</BodyText>
            {section.commitment && <BodyText>{section.commitment}</BodyText>}
          </>
        )}
        
        {section.modification && (
          <>
            <BodyText sx={{ mb: 2 }}>{section.modification}</BodyText>
            <BodyText sx={{ mb: 2 }}>{section.suspension}</BodyText>
            {section.termination && <BodyText>{section.termination}</BodyText>}
          </>
        )}
        
        {section.reportContent && (
          <>
            <BodyText sx={{ mb: 2, fontWeight: 600 }}>{section.reportContent.title}</BodyText>
            <List sx={{ mt: 1, mb: 2 }}>
              <ListItem sx={{ py: 0.5, px: 0, pl: 2 }}>
                <ListItemText 
                  primary={`• ${section.reportContent.userData}`}
                  primaryTypographyProps={{ variant: 'body1' }}
                />
              </ListItem>
              <ListItem sx={{ py: 0.5, px: 0, pl: 2 }}>
                <ListItemText 
                  primary={`• ${section.reportContent.partnerData}`}
                  primaryTypographyProps={{ variant: 'body1' }}
                />
              </ListItem>
            </List>
            {section.objective && <BodyText sx={{ mb: 2 }}>{section.objective}</BodyText>}
            {section.disclaimer && <BodyText sx={{ mb: 2 }}>{section.disclaimer}</BodyText>}
            {section.userResponsibility && <BodyText>{section.userResponsibility}</BodyText>}
          </>
        )}
      </ContentBox>
    );
  };

  return (
    <PageContainer>
      <PagePaper>
        <PageTitle>{t('cgu:title')}</PageTitle>
        <PageSubtitle>{t('cgu:subtitle')}</PageSubtitle>
        <SecondaryText sx={{ mb: 3 }}>{t('cgu:lastUpdate')}</SecondaryText>
        
        {[...Array(15)].map((_, i) => renderSection(`section${i + 1}`))}
      </PagePaper>
    </PageContainer>
  );
};

export default CGUPage;
