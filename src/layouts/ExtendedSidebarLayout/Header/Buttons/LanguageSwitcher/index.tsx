import { useRef, useState, useEffect } from 'react';

import {
  IconButton,
  Box,
  List,
  ListItem,
  Divider,
  Typography,
  ListItemText,
  alpha,
  Popover,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';
import internationalization from 'src/i18n/i18n';
import { useTranslation } from 'react-i18next';

import { DE } from 'country-flag-icons/react/3x2';
import { US } from 'country-flag-icons/react/3x2';
import { ES } from 'country-flag-icons/react/3x2';
import { FR } from 'country-flag-icons/react/3x2';
import { CN } from 'country-flag-icons/react/3x2';
import { AE } from 'country-flag-icons/react/3x2';
import { RU } from 'country-flag-icons/react/3x2';

const SectionHeading = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
        padding: ${theme.spacing(2, 2, 0)};
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  border-radius: ${theme.general.borderRadiusLg};
`
);

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t }: { t: any } = useTranslation();
  const getLanguage = window.localStorage.getItem('lng') || i18n.language;
  const theme = useTheme();

  useEffect(() => {
    internationalization.changeLanguage(window.localStorage.getItem('lng') || getLanguage)
  }, []);

  const switchLanguage = ({ lng }: { lng: any }) => {
    internationalization.changeLanguage(lng);
    window.localStorage.setItem('lng', lng)
  };
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title={t('Language Switcher')}>
        <IconButtonWrapper
          color="secondary"
          ref={ref}
          onClick={handleOpen}
          sx={{
            mx: 1,
            background: alpha(theme.colors.error.main, 0.1),
            transition: `${theme.transitions.create(['background'])}`,
            color: theme.colors.error.main,

            '&:hover': {
              background: alpha(theme.colors.error.main, 0.2)
            }
          }}
        >
          {getLanguage === 'de' && <DE title="German" />}
          {getLanguage === 'en' && <US title="English" />}
          {getLanguage === 'en-US' && <US title="English" />}
          {getLanguage === 'en-GB' && <US title="English" />}
          {getLanguage === 'es' && <ES title="Spanish" />}
          {getLanguage === 'fr' && <FR title="French" />}
          {getLanguage === 'cn' && <CN title="Chinese" />}
          {getLanguage === 'ae' && <AE title="Arabic" />}
          {getLanguage === 'ru' && <RU title="Russian" />}
        </IconButtonWrapper>
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
        <Box
          sx={{
            maxWidth: 240
          }}
        >
          <SectionHeading variant="body2" color="text.primary">
            {t('Language_Switcher')}
          </SectionHeading>
          <List
            sx={{
              p: 2,
              svg: {
                width: 26,
                mr: 1
              }
            }}
            component="nav"
          >
            <ListItem
              className={
                getLanguage === 'en' || getLanguage === 'en-US' ? 'active' : ''
              }
              button
              onClick={() => {
                switchLanguage({ lng: 'en' });
                handleClose();
              }}
            >
              <US title="English" />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary={t('English')}
              />
            </ListItem>
            {/* <ListItem
              className={getLanguage === 'de' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'de' });
                handleClose();
              }}
            >
              <DE title="German" />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="German"
              />
            </ListItem> */}
            {/* <ListItem
              className={getLanguage === 'es' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'es' });
                handleClose();
              }}
            >
              <ES title="Spanish" />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="Spanish"
              />
            </ListItem> */}
            {/* <ListItem
              className={getLanguage === 'fr' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'fr' });
                handleClose();
              }}
            >
              <FR title="French" />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="French"
              />
            </ListItem> */}
            {/* <ListItem
              className={getLanguage === 'cn' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'cn' });
                handleClose();
              }}
            >
              <CN title="Chinese" />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="Chinese"
              />
            </ListItem> */}
            <ListItem
              className={getLanguage === 'ae' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'ae' });
                handleClose();
              }}
            >
              <AE title="Arabic" />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary={t('Arabic')}
              />
            </ListItem>
            <ListItem
              className={getLanguage === 'ru' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'ru' });
                handleClose();
              }}
            >
              <RU title="Russian" />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary={t('Russian')}
              />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Popover>
    </>
  );
}

export default LanguageSwitcher;
