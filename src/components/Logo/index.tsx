import { styled } from '@mui/material';
import Link from 'src/components/Link';
import logo from 'public/logo.svg';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};

        &:hover {
          text-decoration: none;
        }
`
);


function Logo() {

  return (
    <LogoWrapper href="/">
      <img src={logo} alt="CarSense" width="140" />
    </LogoWrapper>
  );
}

export default Logo;
