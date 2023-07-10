import { useState, ChangeEvent } from 'react';
import {
  Card,
  Box,
  CardHeader,
  List,
  Avatar,
  IconButton,
  Tooltip,
  Typography,
  Switch,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CallReceivedTwoToneIcon from '@mui/icons-material/CallReceivedTwoTone';
import CallMadeTwoToneIcon from '@mui/icons-material/CallMadeTwoTone';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RootWrapper = styled(Card)(
  ({ theme }) => `
    background: ${theme.colors.gradients.blue3};
    color: ${theme.colors.alpha.trueWhite[100]};
    
    .MuiIconButton-root {
      background: ${theme.colors.alpha.trueWhite[10]};
      color: ${theme.colors.alpha.trueWhite[70]};
      
      &:hover {
        background: ${theme.colors.alpha.trueWhite[10]};
        color: ${theme.colors.alpha.trueWhite[100]};
      }
    }
    
    .MuiAvatarGroup-avatar {
      background: ${theme.colors.alpha.trueWhite[10]};
      color: ${theme.colors.alpha.trueWhite[70]} !important;
    }
    
    .MuiList-root {
      margin-bottom: ${theme.spacing(2)};

      .MuiButtonBase-root {
        color: ${theme.colors.alpha.trueWhite[70]};
      
        &:hover, &:active, .active {
            background: ${theme.colors.alpha.trueWhite[10]};
            color: ${theme.colors.alpha.trueWhite[100]};
        }
      }
      
      .MuiListItemAvatar-root {
            background: ${theme.colors.alpha.trueWhite[100]};
            border-radius: 100px;
            margin-right: ${theme.spacing(1.5)};
            width: ${theme.spacing(5)};
            height: ${theme.spacing(5)};
            display: flex;
            align-items: center;
            justify-content: center;
      }
    }
`
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
    background: ${theme.colors.gradients.blue1};
    color:  ${theme.colors.alpha.trueWhite[100]};;
    border-radius: ${theme.general.borderRadiusXl};
    padding: ${theme.spacing(1)};
    box-shadow: none;

    .MuiCardHeader-root {
      .MuiCardHeader-title {
          color: ${theme.colors.alpha.trueWhite[100]};;
          font-weight: normal;
          padding-bottom: ${theme.spacing(0.5)};
      }
    }
    
    .MuiCardHeader-subheader {
        color:  ${theme.colors.alpha.trueWhite[100]};;
    }
    
    .MuiSwitch-colorPrimary .MuiSwitch-thumb {
      background: ${theme.colors.alpha.trueWhite[50]};
      border-color: ${theme.colors.alpha.trueWhite[30]};
    }

    .MuiSwitch-colorPrimary.Mui-checked .MuiSwitch-thumb {
      background: ${theme.colors.alpha.trueWhite[100]};
      border-color: ${theme.colors.alpha.trueWhite[100]};
    }
    
    .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
        background: ${theme.colors.alpha.trueWhite[100]};
    }
`
);

const ListItemWrapper = styled(ListItemButton)(
  () => `
    border-radius: 0;
`
);

const SwipeIndicator = styled(IconButton)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.sm}px) {
        display: none;
    }
    transition: ${theme.transitions.create(['background', 'color'])};
    color: ${theme.colors.alpha.trueWhite[50]};
    position: absolute;
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
    top: 50%;
    margin-top: ${theme.spacing(-1.5)};
    border-radius: 100px;

    &:hover {
      color: ${theme.colors.alpha.trueWhite[100]};
      background: ${theme.colors.alpha.trueWhite[10]};
    }

    &.MuiSwipe-left {
      left: ${theme.spacing(1.5)};
    }
    
    &.MuiSwipe-right {
      right: ${theme.spacing(1.5)};
    }
`
);

const SwiperWrapper = styled(Box)(
  ({ theme }) => `
    .swiper-pagination {
      .swiper-pagination-bullet {
        background: ${theme.colors.alpha.trueWhite[30]};
        opacity: 1;

        &.swiper-pagination-bullet-active {
          background: ${theme.colors.alpha.trueWhite[100]};
          width: 16px;
          border-radius: 6px;
        }
      }
    }
`
);

const AvatarWrapperError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);


function BankAccounts() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [state, setState] = useState({
    interest: true
  });

  const interestActivate = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <RootWrapper
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        title={t('dashboard_finance_my_bank_title')}
        action={
          <IconButton size="small">
            <MenuTwoToneIcon />
          </IconButton>
        }
      />
      <SwiperWrapper
        sx={{
          mx: 'auto',
          maxWidth: 500,
          position: 'relative',
          py: 2,
          px: { xs: 2, sm: 8 }
        }}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation={{
            nextEl: '.MuiSwipe-right',
            prevEl: '.MuiSwipe-left'
          }}
          // @ts-ignore
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
        >
          <SwiperSlide>
            <CardWrapper
              sx={{
                height: '100%',
                background: theme.colors.gradients.green2,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardHeader
                sx={{
                  alignItems: 'flex-start',
                  pt: 3
                }}
                action={
                  <Typography variant="h4">{t('dashboard_finance_my_bank_name_example1')}</Typography>
                }
                title={t('Balance')}
                subheader={`548 547 ${t('currency')}`}
                subheaderTypographyProps={{ variant: 'h2' }}
              />
              <Box
                sx={{
                  pl: 2,
                  py: 2
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">**** 4856</Typography>
              </Box>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper
              sx={{
                height: '100%',
                background: theme.colors.gradients.blue1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardHeader
                sx={{
                  alignItems: 'flex-start',
                  pt: 3
                }}
                action={
                  <Typography variant="h4">{t('dashboard_finance_my_bank_name_example2')}</Typography>
                }
                title={t('Balance')}
                subheader={`15 547 ${t('currency')}`}
                subheaderTypographyProps={{ variant: 'h2' }}
              />
              <Box
                sx={{
                  pl: 2,
                  py: 2
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">**** 3466</Typography>
                <Tooltip arrow title={t('Disable Account')}>
                  <Switch
                    checked={state.interest}
                    onChange={interestActivate}
                    color="primary"
                    name="interest"
                  />
                </Tooltip>
              </Box>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper
              sx={{
                height: '100%',
                background: theme.colors.gradients.orange1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardHeader
                sx={{
                  alignItems: 'flex-start',
                  pt: 3
                }}
                action={
                  <Typography variant="h4">{t('dashboard_finance_my_bank_name_example3')}</Typography>
                }
                title={t('Balance')}
                subheader={`487 547 ${t('currency')}`}
                subheaderTypographyProps={{ variant: 'h2' }}
              />
              <Box
                sx={{
                  pl: 2,
                  py: 2
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">**** 6545</Typography>
                <Tooltip arrow title={t('Disable Account')}>
                  <Switch
                    checked={state.interest}
                    onChange={interestActivate}
                    color="primary"
                    name="interest"
                  />
                </Tooltip>
              </Box>
            </CardWrapper>
          </SwiperSlide>
        </Swiper>
        <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
          <ChevronLeftTwoToneIcon />
        </SwipeIndicator>
        <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
          <ChevronRightTwoToneIcon />
        </SwipeIndicator>
      </SwiperWrapper>
      <CardHeader title={t('dashboard_finance_lastet_expenses_title')} />
      <List disablePadding>
        <ListItemWrapper>
          <ListItemAvatar
            sx={{
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AvatarWrapperSuccess>
              <CallReceivedTwoToneIcon />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={t('dashboard_finance_lastet_expenses_example1')}
            primaryTypographyProps={{ variant: 'h5', noWrap: true }}
          />
          <Typography
            align="right"
            variant="body1"
            noWrap
            sx={{
              mr: 2
            }}
          >
            {`52 123 ${t('currency')}`}
          </Typography>
          <ChevronRightTwoToneIcon />
        </ListItemWrapper>
        <ListItemWrapper>
          <ListItemAvatar
            sx={{
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AvatarWrapperError>
              <CallMadeTwoToneIcon />
            </AvatarWrapperError>
          </ListItemAvatar>
          <ListItemText
            primary={t('dashboard_finance_lastet_expenses_example2')}
            primaryTypographyProps={{ variant: 'h5', noWrap: true }}
          />
          <Typography
            align="right"
            variant="body1"
            noWrap
            sx={{
              mr: 2
            }}
          >
            -{`1 892 ${t('currency')}`}
          </Typography>
          <ChevronRightTwoToneIcon />
        </ListItemWrapper>
        <ListItemWrapper>
          <ListItemAvatar
            sx={{
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AvatarWrapperSuccess>
              <CallReceivedTwoToneIcon />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={t('dashboard_finance_lastet_expenses_example3')}
            primaryTypographyProps={{ variant: 'h5', noWrap: true }}
          />
          <Typography
            align="right"
            variant="body1"
            noWrap
            sx={{
              mr: 2
            }}
          >
            {`22 484 ${t('currency')}`}
          </Typography>
          <ChevronRightTwoToneIcon />
        </ListItemWrapper>
        <ListItemWrapper>
          <ListItemAvatar
            sx={{
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AvatarWrapperError>
              <CallMadeTwoToneIcon />
            </AvatarWrapperError>
          </ListItemAvatar>
          <ListItemText
            primary={t('dashboard_finance_lastet_expenses_example4')}
            primaryTypographyProps={{ variant: 'h5', noWrap: true }}
          />
          <Typography
            align="right"
            variant="body1"
            noWrap
            sx={{
              mr: 2
            }}
          >
            -{`1 000 ${t('currency')}`}
          </Typography>
          <ChevronRightTwoToneIcon />
        </ListItemWrapper>
        <ListItemWrapper>
          <ListItemAvatar
            sx={{
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AvatarWrapperSuccess>
              <CallReceivedTwoToneIcon />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={t('dashboard_finance_lastet_expenses_example5')}
            primaryTypographyProps={{ variant: 'h5', noWrap: true }}
          />
          <Typography
            align="right"
            variant="body1"
            noWrap
            sx={{
              mr: 2
            }}
          >
            {`2 500 ${t('currency')}`}
          </Typography>
          <ChevronRightTwoToneIcon />
        </ListItemWrapper>
        <ListItemWrapper>
          <ListItemAvatar
            sx={{
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AvatarWrapperError>
              <CallMadeTwoToneIcon />
            </AvatarWrapperError>
          </ListItemAvatar>
          <ListItemText
            primary={t('dashboard_finance_lastet_expenses_example6')}
            primaryTypographyProps={{ variant: 'h5', noWrap: true }}
          />
          <Typography
            align="right"
            variant="body1"
            noWrap
            sx={{
              mr: 2
            }}
          >
            -{`42 647 ${t('currency')}`}
          </Typography>
          <ChevronRightTwoToneIcon />
        </ListItemWrapper>
      </List>
    </RootWrapper>
  );
}

export default BankAccounts;
