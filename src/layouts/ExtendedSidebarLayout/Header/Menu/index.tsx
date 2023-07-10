import { useRef, useState } from 'react';
import {
  Box,
  Button,
  useTheme,
  CardActionArea,
  Typography,
  Grid,
  Card,
  Popover,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import Text from 'src/components/Text';
import Link from 'src/components/Link';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';


const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
      .MuiTouchRipple-root {
        opacity: .2;
      }

      .MuiCardActionArea-focusHighlight {
        background: ${theme.colors.primary.main};
      }

      &:hover {
        .MuiCardActionArea-focusHighlight {
          opacity: .05;
        }
      }
`
);

function HeaderMenu() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();



  const ref2 = useRef<any>(null);
  const [isOpen2, setOpen2] = useState<boolean>(false);

  const handleOpen2 = (): void => {
    setOpen2(true);
  };

  const handleClose2 = (): void => {
    setOpen2(false);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'inline-flex' }
        }}
      >
        <Button
          ref={ref2}
          onClick={handleOpen2}
          endIcon={<KeyboardArrowDownTwoToneIcon />}
          color="secondary"
          size="small"
          sx={{
            px: 2,
            backgroundColor: `${theme.colors.secondary.lighter}`,
            color: `${theme.colors.secondary.dark}`,

            '.MuiSvgIcon-root': {
              color: `${theme.colors.secondary.dark}`,
              transition: `${theme.transitions.create(['color'])}`
            },

            '&:hover': {
              backgroundColor: `${theme.colors.secondary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.secondary.main
              )}`,

              '.MuiSvgIcon-root': {
                color: `${theme.palette.getContrastText(
                  theme.colors.secondary.main
                )}`
              }
            }
          }}
        >
          {t('Application')}
        </Button>
      </Box>
      <Popover
        disableScrollLock
        anchorEl={ref2.current}
        onClose={handleClose2}
        open={isOpen2}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        sx={{
          '.MuiPopover-paper': {
            background: theme.colors.gradients.blue3
          }
        }}
      >
        <Box
          sx={{
            maxWidth: 400
          }}
          p={3}
        >
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            sx={{
              color: theme.colors.alpha.trueWhite[100],
              fontSize: theme.typography.pxToRem(18)
            }}
          >
            {t('Application')}
          </Typography>
          <Grid container mt={1} spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <Link href="/promocodes">
                  <CardActionAreaWrapper
                    sx={{
                      p: 2
                    }}
                  >
                    <Text color="warning">
                      <AccountTreeTwoToneIcon
                        sx={{
                          mb: 1
                        }}
                      />
                    </Text>
                    <Typography variant="h4">{t('promocodes_title')}</Typography>
                  </CardActionAreaWrapper>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <Link href="/application/appsettings">
                  <CardActionAreaWrapper
                    sx={{
                      p: 2
                    }}
                  >
                    <Text color="primary">
                      <DashboardCustomizeTwoToneIcon
                        sx={{
                          mb: 1
                        }}
                      />
                    </Text>
                    <Typography variant="h4">{t('Application_settings')}</Typography>
                  </CardActionAreaWrapper>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <Link href="/application/carconfig">
                  <CardActionAreaWrapper
                    sx={{
                      p: 2
                    }}
                  >
                    <Text color="success">
                      <ContactSupportTwoToneIcon
                        sx={{
                          mb: 1
                        }}
                      />
                    </Text>
                    <Typography variant="h4">{t('Конфигурация автомобилей')}</Typography>
                  </CardActionAreaWrapper>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderMenu;
