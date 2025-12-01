/**
 * CarDoc UI Components
 * 
 * Export centralisé de tous les composants UI sémantiques.
 * Utiliser ces composants au lieu des composants MUI bruts pour:
 * - Éviter les "magic numbers"
 * - Garantir la cohérence visuelle
 * - Faciliter la maintenance
 * - Respecter les design tokens
 * 
 * Usage:
 * ```jsx
 * import { PageContainer, PagePaper, PageTitle } from '@/components/ui';
 * 
 * function MyPage() {
 *   return (
 *     <PageContainer>
 *       <PagePaper>
 *         <PageTitle>Mon titre</PageTitle>
 *       </PagePaper>
 *     </PageContainer>
 *   );
 * }
 * ```
 */

// Layout Components
export { default as PageContainer } from './PageContainer';
export { default as PagePaper } from './PagePaper';
export { default as ContentBox } from './ContentBox';
export { default as FlexBox } from './FlexBox';
export { default as AppLogo } from './AppLogo';
export { default as ContactCard } from './ContactCard';
export { default as IconTextRow } from './IconTextRow';

// Typography Components
export {
  PageTitle,
  PageSubtitle,
  SectionTitle,
  SectionSubtitle,
  BodyText,
  SecondaryText,
  CaptionText,
} from './Typography';

// Content Components
export { default as Paragraph } from './Paragraph';
export { default as StrongText } from './StrongText';
export { default as BulletList } from './BulletList';
export { default as BulletItem } from './BulletItem';
export { default as ExternalLink } from './ExternalLink';

// Feedback Components
export { default as ConfirmDialog } from './ConfirmDialog';
export { default as AlertBox } from './AlertBox';
