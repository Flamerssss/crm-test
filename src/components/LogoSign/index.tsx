import {
  styled,
} from '@mui/material';
import Link from 'src/components/Link';
import logo from 'public/logo.svg';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 200px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);


function Logo() {

  return (
    <LogoWrapper href="/">
      <img src={logo} alt="CarSense" />
    </LogoWrapper>
  );
}

export default Logo;
