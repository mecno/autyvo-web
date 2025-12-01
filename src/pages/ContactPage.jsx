import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Link } from '@mui/material';
import { 
  Language as LanguageIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import { 
  PageContainer, 
  PagePaper, 
  PageTitle, 
  PageSubtitle, 
  ContentBox, 
  SectionTitle,
  BodyText,
  FlexBox
} from '@/components/ui';
import { CARDOC_WEBSITE, CARDOC_SUPPORT_EMAIL } from '@/constants';

const ContactPage = () => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <Helmet>
        <title>{t('pageTitle.contact')}</title>
      </Helmet>

      <PageContainer>
        <PagePaper>
          <PageTitle>{t('contact.title')}</PageTitle>
          <PageSubtitle>{t('contact.subtitle')}</PageSubtitle>

          <ContentBox variant="section">
            <FlexBox 
              direction="column" 
              gap="medium"
              align="flex-start"
              sx={{
                '& > div': {
                  p: 2,
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                  width: '100%',
                  maxWidth: '400px',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    borderColor: 'primary.main',
                  }
                }
              }}
            >
              {/* Site Web */}
              <Box>
                <FlexBox align="center" gap="small" sx={{ mb: 1 }}>
                  <LanguageIcon color="primary" />
                  <SectionTitle component="h3">
                    {t('contact.website.label')}
                  </SectionTitle>
                </FlexBox>
                <BodyText gutterBottom>
                  {t('contact.website.description')}
                </BodyText>
                <Link 
                  href={CARDOC_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ fontWeight: 500 }}
                >
                  {CARDOC_WEBSITE}
                </Link>
              </Box>

              {/* Support Email */}
              <Box>
                <FlexBox align="center" gap="small" sx={{ mb: 1 }}>
                  <EmailIcon color="primary" />
                  <SectionTitle component="h3">
                    {t('contact.email.label')}
                  </SectionTitle>
                </FlexBox>
                <BodyText gutterBottom>
                  {t('contact.email.description')}
                </BodyText>
                <Link 
                  href={`mailto:${CARDOC_SUPPORT_EMAIL}`}
                  color="primary"
                  sx={{ fontWeight: 500 }}
                >
                  {CARDOC_SUPPORT_EMAIL}
                </Link>
              </Box>
            </FlexBox>
          </ContentBox>
        </PagePaper>
      </PageContainer>
    </>
  );
};

export default ContactPage;
