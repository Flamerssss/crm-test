import {
  Grid,
  Box,
  CircularProgress,
  Card,
  Typography,
  alpha,
  circularProgressClasses,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';

const CardBorderBottom = styled(Card)(
  () => `
    border-bottom: transparent 5px solid;
  `
);

function TelematicsStatuses() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.success.main}`,
            boxShadow: `
                    0 .7rem 1rem ${alpha(theme.colors.success.main, 0.08)},
                    0 .25rem .7rem ${alpha(theme.colors.success.main, 0.15)}
                    `,
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box flexGrow={1} mr={2}>
            <Typography
              component="div"
              fontWeight="bold"
              sx={{
                pb: 1
              }}
              variant="caption"
            >
              {t('dashboard_car_move')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="h2"
            >
              <span>24</span>
            </Typography>
          </Box>
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  color: `${theme.colors.success.main}`
                }}
                variant="h5"
              >
                76%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.success.lighter
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.success.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={2}
              variant="determinate"
              value={70}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.primary.main}`,
            boxShadow: `
                    0 .7rem 1rem ${alpha(theme.colors.primary.main, 0.08)},
                    0 .25rem .7rem ${alpha(theme.colors.primary.main, 0.15)}
                    `,
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box flexGrow={1} mr={2}>
            <Typography
              component="div"
              fontWeight="bold"
              sx={{
                pb: 1
              }}
              variant="caption"
            >
              {t('dashboard_car_engine_on')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="h2"
            >
              <span>15</span>
            </Typography>
          </Box>
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  color: `${theme.colors.primary.main}`
                }}
                variant="h5"
              >
                28%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.primary.lighter
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.primary.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={2}
              variant="determinate"
              value={28}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.warning.main}`,
            boxShadow: `
                    0 .7rem 1rem ${alpha(theme.colors.warning.main, 0.08)},
                    0 .25rem .7rem ${alpha(theme.colors.warning.main, 0.15)}
                    `,
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box flexGrow={1} mr={2}>
            <Typography
              component="div"
              fontWeight="bold"
              sx={{
                pb: 1
              }}
              variant="caption"
            >
              {t('dashboard_car_engine_off')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="h2"
            >
              <span>42</span>
            </Typography>
          </Box>
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  color: `${theme.colors.warning.main}`
                }}
                variant="h5"
              >
                32%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.warning.lighter
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.warning.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={2}
              variant="determinate"
              value={32}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.error.main}`,
            boxShadow: `
                    0 .7rem 1rem ${alpha(theme.colors.error.main, 0.08)},
                    0 .25rem .7rem ${alpha(theme.colors.error.main, 0.15)}
                    `,
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box flexGrow={1} mr={2}>
            <Typography
              component="div"
              fontWeight="bold"
              sx={{
                pb: 1
              }}
              variant="caption"
            >
              {t('dashboard_car_no_signal')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="h2"
            >
              <span>4</span>
            </Typography>
          </Box>
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  color: `${theme.colors.error.main}`
                }}
                variant="h5"
              >
                43%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.error.lighter
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.error.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={2}
              variant="determinate"
              value={43}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
    </Grid>
  );
}

export default TelematicsStatuses;
