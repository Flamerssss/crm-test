import { useRef, useState } from 'react';

import {
  alpha,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  useTheme,
  styled,
  Tooltip,
  Typography,
  Grid
} from '@mui/material';
import { Avatar } from 'antd';
import Scrollbar from 'src/components/Scrollbar';
// import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Text from 'src/components/Text';
import { observer } from "mobx-react-lite";
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { useTranslation } from 'react-i18next';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import systemStore from '../../../../../store/system_store';
import Label from 'src/components/Label';
import Link from 'src/components/Link';
import CheckIcon from '@mui/icons-material/Check';
const BoxComposed = styled(Box)(
  () => `
  position: relative;
`
);

const BoxComposedContent = styled(Box)(
  ({ theme }) => `
  position: relative;
  z-index: 7;

  .MuiTypography-root {
      color: ${theme.palette.primary.contrastText};

      & + .MuiTypography-root {
          color: ${alpha(theme.palette.primary.contrastText, 0.7)};
      }
  }
  
`
);

const BoxComposedImage = styled(Box)(
  () => `
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  filter: grayscale(80%);
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: inherit;
`
);

const BoxComposedBg = styled(Box)(
  () => `
  position: absolute;
  left: 0;
  top: 0;
  z-index: 6;
  height: 100%;
  width: 100%;
  border-radius: inherit;
`
);





const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  border-radius: ${theme.general.borderRadiusLg};
`
);


const getStatus = (carStatus: string, t1: string, t2: string): JSX.Element => {

  const map = {
    new: {
      text: t1,
      color: 'error'
    },
    read: {
      text: t2,
      color: 'success'
    },
  };

  const { text, color }: any = map[carStatus];

  return <Label color={color}>{text}</Label>;
};

function HeaderNotifications() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };


  const newNotifications = systemStore?.web_notifications?.filter(
    (notification) => notification.status === 'new'
  );



  return (
    <>
      <Tooltip arrow title={t('Notifications')}>
        <Badge
          variant="dot"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          sx={{
            '.MuiBadge-badge': {
              background: newNotifications?.length > 0 ? theme.colors.error.main : theme.colors.success.main[1],
              animation: 'pulse 1s infinite',
              transition: `${theme.transitions.create(['all'])}`
            }
          }}
        >
          <IconButtonWrapper
            sx={{
              background: alpha(theme.colors.primary.main, 0.1),
              transition: `${theme.transitions.create(['background'])}`,
              color: theme.colors.primary.main,

              '&:hover': {
                background: alpha(theme.colors.primary.main, 0.2)
              }
            }}
            color="primary"
            ref={ref}
            onClick={handleOpen}
          >
            <NotificationsActiveTwoToneIcon fontSize="small" />
          </IconButtonWrapper>
        </Badge>
      </Tooltip>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box minWidth={440} maxWidth={440} p={2}>
          <BoxComposed
            mb={2}
            sx={{
              borderRadius: `${theme.general.borderRadius}`,
              background: `${theme.colors.gradients.black1}`
            }}
          >
            <BoxComposedBg
              sx={{
                opacity: 0.3,
                background: `${theme.colors.gradients.green2}`
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.2,
                backgroundImage:
                  'url("/static/images/placeholders/covers/1.jpg")'
              }}
            />
            <BoxComposedContent py={3}>
              <Typography
                textAlign="center"
                sx={{
                  pb: 0.5
                }}
                variant="h4"
              >
                {t('Notifications')}
              </Typography>
              <Typography textAlign="center" variant="subtitle2">
                {t('new_messages')}:{' '}
                <Text color="success">
                  <b>{newNotifications?.length}</b>
                </Text>
              </Typography>
            </BoxComposedContent>
          </BoxComposed>
        </Box>
        <Divider />

        <Box
          sx={{
            height: 350
          }}
        >
          <Scrollbar>
            {systemStore?.web_notifications?.map((item, index) =>
              <Grid item xs={12} md={12} pt={3} pl={1} key={index}>
                <Divider />
                <Grid container spacing={2} alignItems="center" >
                  <Grid item xs={2} md={2}>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<BusinessCenterTwoToneIcon />} size={50} />
                  </Grid>
                  <Grid item xs={10} md={10}>
                    <Typography variant="h5" gutterBottom>
                      {item?.title} {getStatus(item?.status, t('new'), t('read'))} {<Button
                        sx={{
                          mt: { xs: 2, sm: 0 }
                        }}
                        component={Link}
                        href={item?.type === 'trips' ? "/trips/details/" + item?.purpose : item?.type === 'clients' ? "/clients/profile/" + item?.purpose : ''}
                        variant="text"
                      >
                        {t('open')}
                      </Button>}
                      <IconButton
                        onClick={() => { systemStore.updateWebNotificationsStatus(item?.id, 'read') }}
                        color="success"
                      >
                        <CheckIcon />
                      </IconButton>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.message}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: 10, marginBottom: 20 }}>
                  {new Intl.DateTimeFormat('ru-Ru', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(item?.created_at * 1000)}
                  <Divider />
                </Grid>
              </Grid>
            )}

          </Scrollbar>
        </Box>
        {/* <Divider />
        <Box
          p={2}
          sx={{
            textAlign: 'center'
          }}
        >
          <Button
            sx={{
              px: 2,
              py: 0.5,
              fontWeight: 'normal',
              borderRadius: 10,
              background: 'transparent',
              color: `${theme.colors.primary.main}`,
              border: `${theme.colors.primary.main} solid 2px`,
              transition: `${theme.transitions.create(['all'])}`,

              '.MuiSvgIcon-root': {
                color: `${theme.colors.primary.main}`,
                transition: `${theme.transitions.create(['color'])}`
              },

              '&:hover': {
                px: 3,
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.dark
                )}`,
                boxShadow: `${theme.colors.shadows.primary}`,

                '.MuiSvgIcon-root': {
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.dark
                  )}`
                }
              },
              '&:active': {
                boxShadow: 'none'
              }
            }}
            variant="contained"
            endIcon={<ArrowForwardTwoToneIcon />}
            color="primary"
          >
            {t('View all')}
          </Button>
        </Box> */}
      </Popover>
    </>
  );
}

export default observer(HeaderNotifications);
