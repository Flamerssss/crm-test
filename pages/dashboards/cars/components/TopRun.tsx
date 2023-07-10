import {
  Box,
  CardHeader,
  Card,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  useTheme
} from '@mui/material';
import Link from 'src/components/Link';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';

function TopRun() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card variant="outlined">
      <CardHeader
        sx={{
          p: 3
        }}
        disableTypography
        title={
          <Typography
            variant="h4"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
          >
            {t('dashboard_car_top_by_mileage')}
          </Typography>
        }
      // action={
      //   <Button
      //     size="small"
      //     variant="text"
      //     endIcon={<ExpandMoreTwoToneIcon />}
      //     color="secondary"
      //     sx={{
      //       backgroundColor: `${theme.colors.secondary.lighter}`,
      //       '&:hover': {
      //         backgroundColor: `${theme.colors.secondary.main}`,
      //         color: `${theme.palette.getContrastText(
      //           theme.colors.secondary.main
      //         )}`
      //       }
      //     }}
      //   >
      //     {t('Export')}
      //   </Button>
      // }
      />
      <Divider />
      <List
        sx={{
          py: 0
        }}
      >
        <ListItem
          sx={{
            px: 2,
            py: 1.95
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              minWidth: 0
            }}
          >
            <Avatar
              src={'https://firebasestorage.googleapis.com/v0/b/carcrm-dd2cf.appspot.com/o/T1G0jigAeHf92G9FdXgBVpSaVOt2%2Fcrm%2Fcars%2Fundefined%2FDSC09873.jpg?alt=media&token=610aaf9a-8f9f-4f63-847a-148e0a9d1386'}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Link href="#" color="text.primary" variant="h5">
                Porsche 911 CARRERA
              </Link>
            }
            secondary={
              <Typography variant="subtitle2" noWrap>
                У561ММ797
              </Typography>
            }
          />
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                pr: 1
              }}
              variant="h3"
            >
              <Text>29544</Text>
            </Typography>
            <ArrowUpwardTwoToneIcon
              fontSize="small"
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            px: 2,
            py: 1.95
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              minWidth: 0
            }}
          >
            <Avatar
              src={'https://firebasestorage.googleapis.com/v0/b/carcrm-dd2cf.appspot.com/o/T1G0jigAeHf92G9FdXgBVpSaVOt2%2Fcrm%2Fcars%2Fundefined%2FDSC03217-1024x684.jpeg?alt=media&token=50f3d1bb-9e8a-4c01-ab32-ffc66bd9f4fe'}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h5">Ford Mustang Gray</Typography>}
            secondary={
              <Typography variant="subtitle2" noWrap>

                К432АН799
              </Typography>
            }
          />
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                pr: 1
              }}
              variant="h3"
            >
              <Text>12541</Text>
            </Typography>
            <ArrowUpwardTwoToneIcon
              fontSize="small"
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            px: 2,
            py: 1.95
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              minWidth: 0
            }}
          >
            <Avatar
              src={'https://firebasestorage.googleapis.com/v0/b/carcrm-dd2cf.appspot.com/o/T1G0jigAeHf92G9FdXgBVpSaVOt2%2Fcrm%2Fcars%2Fundefined%2Fmustangred.jpeg?alt=media&token=26e20b6e-4af5-4b0a-a190-5f0a922b8250'}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h5">Ford Mustang Red</Typography>}
            secondary={
              <Typography variant="subtitle2" noWrap>
                К423АН799
              </Typography>
            }
          />
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                pr: 1
              }}
              variant="h3"
            >
              <Text>78513</Text>
            </Typography>
            <ArrowDownwardTwoToneIcon
              fontSize="small"
              sx={{
                color: `${theme.colors.error.main}`
              }}
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            px: 2,
            py: 1.95
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              minWidth: 0
            }}
          >
            <Avatar
              src={'https://firebasestorage.googleapis.com/v0/b/carcrm-dd2cf.appspot.com/o/T1G0jigAeHf92G9FdXgBVpSaVOt2%2Fcrm%2Fcars%2Fundefined%2FA7200005-1024x683.jpeg?alt=media&token=f3607870-8fda-4537-9f52-cd3d28c666b2'}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h5">BMW 520D XDrive Black</Typography>}
            secondary={
              <Typography variant="subtitle2" noWrap>
                E374XB799
              </Typography>
            }
          />
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                pr: 1
              }}
              variant="h3"
            >
              <Text>69841</Text>
            </Typography>
            <ArrowUpwardTwoToneIcon
              fontSize="small"
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
          </Box>
        </ListItem>
      </List>
    </Card>
  );
}

export default TopRun;
