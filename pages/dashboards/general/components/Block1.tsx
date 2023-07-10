import { Box, Card, Grid, Typography, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';


function Block1({ allCar, availableCars, inRentCars, bookedCar, inservice, }) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={2.4} sm={2.4} md={2.4}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.blue1}`
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('dashboard_all_car')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CountUp
                start={0}
                end={allCar}
                duration={1}
                delay={0}
              />
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={2.4} sm={2.4} md={2.4}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.purple3}`
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('dashboard_car_available')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CountUp
                start={0}
                end={availableCars}
                duration={1}
                delay={0}
              />
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={2.4} sm={2.4} md={2.4}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.green2}`
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('dashboard_car_inRent')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CountUp
                start={0}
                end={inRentCars}
                duration={1}
                delay={0}
              />
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={2.4} sm={2.4} md={2.4}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.black1}`
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('dashboard_car_booked')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CountUp
                start={0}
                end={bookedCar}
                duration={1}
                delay={0}
              />
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={2.4} sm={2.4} md={2.4}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.pink2}`
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('dashboard_car_service')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CountUp
                start={0}
                end={inservice}
                duration={1}
                delay={0}
              />
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block1;
