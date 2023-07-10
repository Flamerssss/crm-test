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
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import AccessibilityNewTwoToneIcon from '@mui/icons-material/AccessibilityNewTwoTone';
import NoAccountsTwoToneIcon from '@mui/icons-material/NoAccountsTwoTone';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      color:  ${theme.colors.alpha.trueWhite[100]};
      width: ${theme.spacing(5.5)};
      height: ${theme.spacing(5.5)};
`
);

function UserInfoBlock() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{
            px: 1,
            pb: 1.5,
            pt: 2,
            background: `${theme.colors.gradients.blue4}`
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.blue2}`
              }}
            >
              <PeopleAltTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('dashboard_clients_all_clients')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
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
                fontSize: `${theme.typography.pxToRem(35)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
              variant="h1"
            >
              2354
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`,
              color: `${theme.colors.alpha.trueWhite[50]}`
            }}
            component="div"
          >
            <b>+36%</b> {t('from_last_month')}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{
            px: 1,
            pb: 1.5,
            pt: 2,
            background: `${theme.colors.gradients.blue3}`
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.orange1}`
              }}
            >
              <PersonAddAltTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('dashboard_clients_new_clients')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
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
                fontSize: `${theme.typography.pxToRem(35)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
              variant="h1"
            >
              21
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`,
              color: `${theme.colors.alpha.trueWhite[50]}`
            }}
            component="div"
          >
            <b>+65%</b> {t('from_last_month')}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{
            px: 1,
            pb: 1.5,
            pt: 2,
            background: `${theme.colors.gradients.purple3}`
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.green1}`
              }}
            >
              <AccessibilityNewTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('dashboard_clients_active_clients')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
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
                fontSize: `${theme.typography.pxToRem(35)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
              variant="h1"
            >
              48
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`,
              color: `${theme.colors.alpha.trueWhite[50]}`
            }}
            component="div"
          >
            <b>+22%</b> {t('from_last_month')}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{
            px: 1,
            pb: 1.5,
            pt: 2,
            background: `${theme.colors.gradients.black2}`
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.blue1}`
              }}
            >
              <NoAccountsTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(13)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('dashboard_clients_no_active_clients')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <ArrowDownwardTwoToneIcon
              sx={{
                color: `${theme.colors.warning.main}`
              }}
            />
            <Typography
              sx={{
                pl: 1,
                fontSize: `${theme.typography.pxToRem(35)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
              variant="h1"
            >
              15
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`,
              color: `${theme.colors.alpha.trueWhite[50]}`
            }}
            component="div"
          >
            <b>-15.35%</b> {t('from_last_month')}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UserInfoBlock;
