import { Box, Card, Typography, styled } from '@mui/material';
import Link from 'src/components/Link';

const FooterWrapper = styled(Card)(
  ({ theme }) => `
        border-radius: 0;
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        p={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2022 - CarCense - Car rental management system
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 }
          }}
          variant="subtitle1"
        >
          Crafted by{' '}
          <Link
            href="https://car-sense.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Car-Sense.io
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
