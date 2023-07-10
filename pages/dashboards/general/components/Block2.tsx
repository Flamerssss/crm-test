import {
  Typography,
  Box,
  Avatar,
  Card,
  Grid,
  useTheme,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import YardTwoToneIcon from '@mui/icons-material/YardTwoTone';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      color:  ${theme.colors.alpha.trueWhite[100]};
      width: ${theme.spacing(5.5)};
      height: ${theme.spacing(5.5)};
`
);

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} lg={6}>
        <Card
          sx={{
            px: 1,
            pb: 3,
            pt: 3
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.blue4}`
              }}
            >
              <ReceiptTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('dashboard_all_leases')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <ArrowDownwardTwoToneIcon
              sx={{
                color: `${theme.colors.error.main}`
              }}
            />
            <Typography
              sx={{
                pl: 1,
                fontSize: `${theme.typography.pxToRem(30)}`
              }}
              variant="h1"
            >
              124
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            // noWrap
            color="text.secondary"
            component="div"
            sx={{
              pl: 1,
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
          >
            <b>+36%</b> {t('from_last_month')}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <Card
          sx={{
            px: 1,
            pb: 3,
            pt: 3
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.success.main}`
              }}
            >
              <YardTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('dashboard_all_clients')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: 0,
              pt: 2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <ArrowUpwardTwoToneIcon
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
            <Typography
              sx={{
                pl: 1,
                fontSize: `${theme.typography.pxToRem(30)}`
              }}
              variant="h1"
            >
              865
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            // noWrap
            color="text.secondary"
            component="div"
            sx={{
              pl: 1,
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
          >
            <b>+22%</b> {t('from_last_month')}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block2;
