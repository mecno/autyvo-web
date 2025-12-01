/**
 * FlexBox - Box sémantique pour layouts flexbox
 * 
 * Box avec display: flex et configurations communes.
 * Props:
 * - direction: 'row' | 'column' (default: 'row')
 * - gap: 'xs' | 'small' | 'medium' | 'large' | number (default: 'small')
 * - align: 'flex-start' | 'center' | 'flex-end' | 'stretch' (default: 'center')
 * - justify: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
 * - wrap: boolean (default: false)
 * 
 * Remplace: <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
 */

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const FlexBox = styled(Box, {
  shouldForwardProp: (prop) => 
    !['direction', 'gap', 'align', 'justify', 'wrap'].includes(prop),
})(({ 
  theme, 
  direction = 'row', 
  gap = 'small', 
  align = 'center', 
  justify, 
  wrap = false 
}) => {
  // Gestion du gap (peut être un token ou un nombre)
  const gapValue = typeof gap === 'string' && theme.spacingTokens[gap]
    ? theme.spacing(theme.spacingTokens[gap])
    : theme.spacing(gap);

  return {
    display: 'flex',
    flexDirection: direction,
    gap: gapValue,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? 'wrap' : 'nowrap',
  };
});

export default FlexBox;
