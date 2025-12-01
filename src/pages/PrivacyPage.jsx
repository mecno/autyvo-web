import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  PageContainer, 
  PagePaper, 
  PageTitle, 
  PageSubtitle, 
  ContentBox, 
  SectionTitle,
  Paragraph,
  StrongText,
  BulletList,
  BulletItem,
  SecondaryText
} from '@/components/ui';
import { CARDOC_CONTACT_EMAIL } from '@/constants';

const PrivacyPage = () => {
  const { t } = useTranslation(['privacy', 'common']);

  // Mise à jour du titre de la page
  useEffect(() => {
    document.title = t('common:pageTitle.privacy') || 'Politique de Confidentialité - CarDoc';
  }, [t]);

  return (
    <PageContainer>
      <PagePaper>
        <PageTitle>{t('privacy:title')}</PageTitle>
        <PageSubtitle>{t('privacy:subtitle')}</PageSubtitle>
        <SecondaryText sx={{ mb: 3 }}>{t('privacy:lastUpdate')}</SecondaryText>
        
        {/* Préambule */}
        <ContentBox variant="section">
          <SectionTitle>{t('privacy:preamble.title')}</SectionTitle>
          <Paragraph>{t('privacy:preamble.content')}</Paragraph>
          <Paragraph>{t('privacy:preamble.rgpd')}</Paragraph>
        </ContentBox>

        {/* Section 1 : Responsable du Traitement */}
        <ContentBox variant="section">
          <SectionTitle>{t('privacy:section1.title')}</SectionTitle>
          <Paragraph>{t('privacy:section1.intro')}</Paragraph>
          <BulletList>
            <BulletItem>{t('privacy:section1.company')}</BulletItem>
            <BulletItem>{t('privacy:section1.capital')}</BulletItem>
            <BulletItem>{t('privacy:section1.address')}</BulletItem>
            <BulletItem>{t('privacy:section1.rcs')}</BulletItem>
          </BulletList>
          <Paragraph>{t('privacy:section1.contact', { contactEmail: CARDOC_CONTACT_EMAIL })}</Paragraph>
        </ContentBox>

        {/* Section 2 : Données Collectées et Finalités */}
        <ContentBox variant="section">
          <SectionTitle>{t('privacy:section2.title')}</SectionTitle>
          <Paragraph>{t('privacy:section2.intro')}</Paragraph>
          
          {/* Section 2A */}
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section2.sectionA.title')}</StrongText>
          <Paragraph>{t('privacy:section2.sectionA.intro')}</Paragraph>
          
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section2.sectionA.email.title')}</StrongText>
          <BulletList>
            <BulletItem variant="indented">{t('privacy:section2.sectionA.email.data')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionA.email.purpose')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionA.email.legal')}</BulletItem>
          </BulletList>
          
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section2.sectionA.oauth.title')}</StrongText>
          <BulletList>
            <BulletItem variant="indented">{t('privacy:section2.sectionA.oauth.data')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionA.oauth.purpose')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionA.oauth.legal')}</BulletItem>
          </BulletList>
          
          {/* Section 2B */}
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section2.sectionB.title')}</StrongText>
          <Paragraph>{t('privacy:section2.sectionB.intro')}</Paragraph>
          
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section2.sectionB.vehicles.title')}</StrongText>
          <BulletList>
            <BulletItem variant="indented">{t('privacy:section2.sectionB.vehicles.data')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionB.vehicles.purpose')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionB.vehicles.legal')}</BulletItem>
          </BulletList>
          
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section2.sectionB.management.title')}</StrongText>
          <BulletList>
            <BulletItem variant="indented">{t('privacy:section2.sectionB.management.data')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionB.management.purpose')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionB.management.legal')}</BulletItem>
          </BulletList>
          
          {/* Section 2C */}
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section2.sectionC.title')}</StrongText>
          <Paragraph>{t('privacy:section2.sectionC.intro')}</Paragraph>
          <BulletList>
            <BulletItem variant="indented">{t('privacy:section2.sectionC.data')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionC.purpose')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section2.sectionC.legal')}</BulletItem>
          </BulletList>
        </ContentBox>

        {/* Section 3 : Destinataires et Partage des Données */}
        <ContentBox variant="section">
          <SectionTitle>{t('privacy:section3.title')}</SectionTitle>
          <Paragraph>{t('privacy:section3.principles.title')}</Paragraph>
          <BulletList>
            <BulletItem variant="indented">{t('privacy:section3.principles.noSale')}</BulletItem>
          </BulletList>
          <Paragraph>{t('privacy:section3.intro')}</Paragraph>
          
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section3.hosting.title')}</StrongText>
          <Paragraph>{t('privacy:section3.hosting.content')}</Paragraph>
          
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section3.sdk.title')}</StrongText>
          <Paragraph>{t('privacy:section3.sdk.intro')}</Paragraph>
          <BulletList>
            <BulletItem variant="indented">{t('privacy:section3.sdk.analytics')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section3.sdk.notifications')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section3.sdk.support')}</BulletItem>
          </BulletList>
          
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section3.legal.title')}</StrongText>
          <Paragraph>{t('privacy:section3.legal.content')}</Paragraph>
        </ContentBox>

        {/* Section 4 : Propriété, Hébergement et Transferts */}
        <ContentBox variant="section">
          <SectionTitle>{t('privacy:section4.title')}</SectionTitle>
          <Paragraph>{t('privacy:section4.ownership')}</Paragraph>
          <Paragraph>{t('privacy:section4.hosting')}</Paragraph>
        </ContentBox>

        {/* Section 5 : Durée de Conservation et Suppression du Compte */}
        <ContentBox variant="section">
          <SectionTitle>{t('privacy:section5.title')}</SectionTitle>
          
          <StrongText sx={{ mb: 1 }}>{t('privacy:section5.retention.title')}</StrongText>
          <Paragraph>{t('privacy:section5.retention.content')}</Paragraph>
          
          <StrongText sx={{ mt: 2, mb: 1 }}>{t('privacy:section5.deletion.title')}</StrongText>
          <Paragraph>{t('privacy:section5.deletion.intro')}</Paragraph>
          <Paragraph>{t('privacy:section5.deletion.process')}</Paragraph>
          <BulletList>
            <BulletItem variant="indented">{t('privacy:section5.deletion.anonymization')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section5.deletion.permanent')}</BulletItem>
          </BulletList>
        </ContentBox>

        {/* Section 6 : Vos Droits sur vos Données */}
        <ContentBox variant="section">
          <SectionTitle>{t('privacy:section6.title')}</SectionTitle>
          <Paragraph>{t('privacy:section6.intro')}</Paragraph>
          <BulletList>
            <BulletItem variant="indented">{t('privacy:section6.access')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section6.rectification')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section6.erasure')}</BulletItem>
            <BulletItem variant="indented">{t('privacy:section6.portability')}</BulletItem>
          </BulletList>
          <Paragraph>{t('privacy:section6.exercise', { contactEmail: CARDOC_CONTACT_EMAIL })}</Paragraph>
        </ContentBox>

        {/* Section 7 : Sécurité */}
        <ContentBox variant="section">
          <SectionTitle>{t('privacy:section7.title')}</SectionTitle>
          <Paragraph>{t('privacy:section7.content')}</Paragraph>
        </ContentBox>

        {/* Section 8 : Modification de la Politique */}
        <ContentBox variant="section">
          <SectionTitle>{t('privacy:section8.title')}</SectionTitle>
          <Paragraph>{t('privacy:section8.content')}</Paragraph>
        </ContentBox>
      </PagePaper>
    </PageContainer>
  );
};

export default PrivacyPage;
