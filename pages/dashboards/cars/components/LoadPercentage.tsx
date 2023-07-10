import {
  Box,
  Grid,
  Card,
  Typography,
  Divider,
  alpha,

  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';


function LoadPercentage() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();


  const chart3Options: ApexOptions = {
    stroke: {
      curve: 'smooth',
      width: [0, 5]
    },
    theme: {
      mode: theme.palette.mode
    },
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    colors: [alpha(theme.colors.primary.main, 0.4), theme.colors.primary.main],
    fill: {
      opacity: 1
    },
    labels: [
      `20 ${t('Aug')}`,
      `21 ${t('Aug')}`,
      `22 ${t('Aug')}`,
      `23 ${t('Aug')}`,
      `24 ${t('Aug')}`,
      `25 ${t('Aug')}`,
      `26 ${t('Aug')}`,
      `27 ${t('Aug')}`,
      `28 ${t('Aug')}`,
      `29 ${t('Aug')}`,
      `30 ${t('Aug')}`,
      `31 ${t('Aug')}`,
    ],
    // xaxis: {
    //   type: 'datetime'
    // },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    legend: {
      show: false
    }
  };

  const chart3Data = [
    {
      name: '',
      type: 'column',
      data: [20, 25, 34, 80, 75, 95, 88, 65, 74, 92, 40, 55]
    },
  ];

  return (
    <Card>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          lg={12}
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box p={3}>
            <Box>
              <Typography gutterBottom variant="h3">
                {t('dashboard_car_loading')}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box flexGrow={1} px={2} pb={2}>
            <Chart
              options={chart3Options}
              series={chart3Data}
              type="line"
              height={'210%'}
            />
          </Box>
          <Divider />
        </Grid>
      </Grid>
    </Card>
  );
}

export default LoadPercentage;
