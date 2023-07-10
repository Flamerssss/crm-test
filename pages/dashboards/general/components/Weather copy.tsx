import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  Divider,
  Grid,
  useTheme,
  Stack,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import CloudTwoToneIcon from '@mui/icons-material/CloudTwoTone';
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
// import WaterTwoToneIcon from '@mui/icons-material/WaterTwoTone';
// import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
// import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
// import Gauge from 'src/components/Gauge';
// import { buildStyles } from 'react-circular-progressbar';
// import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import { addDays } from 'date-fns';
import GrainTwoToneIcon from '@mui/icons-material/GrainTwoTone';
// import { useAuth } from 'src/hooks/useAuth';


const WeatherBox = styled(Card)(
  ({ theme }) => `
      background: ${theme.colors.gradients.black1};
      padding: ${theme.spacing(4)};
      overflow: hidden;
      position: relative;
      width: 100%;
`
);

const WeatherBoxContent = styled(Box)(
  ({ theme }) => `
      z-index: 5;
      position: relative;
      color: ${theme.colors.alpha.trueWhite[100]};
`
);

const TopBarImage = styled(Box)(
  () => `
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .3;
`
);

const WeatherIcon = styled(Box)(
  () => `
    height: auto;
    width: 100%;
    text-align: center;

    img {
      max-width: 158px;
    }
`
);

const BoxWeather = styled(Box)(
  ({ theme }) => `
    width: 100%;
    backdrop-filter: blur(8px);
    background: ${theme.colors.alpha.trueWhite[10]};
    padding: ${theme.spacing(3)};
    border-radius: ${theme.general.borderRadius};
`
);

// const BoxWeatherSmall = styled(Box)(
//   ({ theme }) => `
//     width: 100%;
//     backdrop-filter: blur(8px);
//     background: ${theme.colors.alpha.trueWhite[10]};
//     color: ${theme.colors.alpha.trueWhite[100]};
//     padding: ${theme.spacing(2)};
//     border-radius: ${theme.general.borderRadius};

//     .MuiTypography-root {
//       color: ${theme.colors.alpha.trueWhite[100]};
//     }

//     .MuiTypography-caption {
//       font-size: ${theme.typography.pxToRem(11)};
//       display: flex;
//       color: ${theme.colors.alpha.trueWhite[50]};
//       align-items: center;

//       .MuiSvgIcon-root {
//         width: 18px;
//         height: 18px;
//         margin-right: ${theme.spacing(0.5)};
//       }
//     }

//     .MuiTypography-body2 {
//       font-size: ${theme.typography.pxToRem(12)};
//       line-height: 1.5;
//     }
// `
// );

const DividerWrapper = styled(Divider)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[10]};
`
);

const LinearHighLow = styled(Box)(
  () => `
    height: 4px;
    width: 100%;
    border-radius: 50px;
    background: linear-gradient(90deg, rgba(103,188,255,1) 0%, rgba(255,184,90,1) 100%);
`
);

// const LinearUv = styled(Box)(
//   ({ theme }) => `
//     height: 4px;
//     width: 100%;
//     border-radius: 50px;
//     position: relative;
//     background: linear-gradient(to right, #41ea55 0%,#f2f22e 25%,#ef8c2f 50%,#ff0c0c 75%,#ba0cff 100%);
    
//     &:after {
//       content: ' ';
//       border-radius: 50px;
//       background: ${theme.colors.alpha.trueWhite[100]};
//       box-shadow: 0 0 0 2px ${theme.colors.alpha.black[100]};
//       position: absolute;
//       left: 30%;
//       top: -2px;
//       height: 8px;
//       width: 8px;
//     }
// `
// );


function Weather({ coords }) {
  const { t }: { t: any } = useTranslation();
  // const { user } = useAuth();
  const theme = useTheme();

  // const data = {
  //   percentage: 67
  // };


  async function postData(url) {
    try {
      const response = await fetch(url, {
        method: 'GET',

      })
      console.log(response)
      return await response.json()
    } catch (err) {
      console.log('error in request', err)
      return null
    }
  }

  const [weather, setWeather] = useState<any | null>(null);
  const getWeather = async () => {
    const apiKey = '1a02dde085913155ce28066a7bbc4bf6'
    const events = await postData(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${apiKey}&units=metric`)
    setWeather(events)
  };

  useEffect(() => {
    if (coords) {
      getWeather()
    }
  }, [coords]);

  return (
    <WeatherBox>
      <TopBarImage
        sx={{
          backgroundImage:
            'url("/static/images/placeholders/covers/automation-bg.jpg")'
        }}
      />
      <WeatherBoxContent>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <BoxWeather>
            <Grid container spacing={1}>
              <Grid item md={6}>
                <WeatherIcon>
                  <img
                    src="/static/images/placeholders/illustrations/partly-cloudy-day-rain.svg"
                    alt="Partly cloudy"
                  />
                </WeatherIcon>
              </Grid>
              <Grid item md={6}>
                <Typography
                  noWrap
                  sx={{
                    fontWeight: 'bold',
                    fontSize: `${theme.typography.pxToRem(45)}`
                  }}
                  variant="h1"
                >
                  {weather?.list[0]?.main.temp.toFixed(0)}<sup>°</sup>
                </Typography>
                <Typography
                  noWrap
                  sx={{
                    pt: 2,
                    pb: 1
                  }}
                  variant="h4"
                >
                  {weather?.list[0]?.weather?.main}
                </Typography>
                <Typography fontWeight="normal" noWrap variant="h6">
                  {t('today')},
                </Typography>
                <Typography fontWeight="normal" noWrap variant="h6">
                  {new Intl.DateTimeFormat('ru-Ru', { year: 'numeric', month: 'short', day: '2-digit', }).format(new Date())}
                </Typography>
                <Box display="flex" pt={2} alignItems="center">
                  <MyLocationTwoToneIcon />
                  <Typography
                    sx={{
                      pl: 1
                    }}

                  >
                    {weather?.city?.name}, {weather?.city?.country == 'RU' ? 'Россия' : weather?.city?.country}
                  </Typography>

                </Box>
              </Grid>
            </Grid>
            <DividerWrapper
              sx={{
                mt: 3,
                mb: 2
              }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                sx={{
                  width: 65
                }}
              >
                <Typography variant="h5">{t('today')}</Typography>
              </Box>
              <Box display="flex" alignItems="center" px={2}>
                <CloudTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[50]}`
                  }}
                  variant="h5"
                >
                  {weather?.list[0]?.main.temp_min.toFixed(0)}<sup>°</sup>
                </Typography>
              </Box>
              <Box
                mx={1}
                sx={{
                  width: '35%'
                }}
              >
                <LinearHighLow />
              </Box>
              <Box>
                <Typography variant="h5">
                  {weather?.list[0]?.main.temp_max.toFixed(0)}<sup>°</sup>
                </Typography>
              </Box>
            </Stack>
            <DividerWrapper
              sx={{
                my: 2
              }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                sx={{
                  width: 65
                }}
              >
                <Typography fontWeight="normal" variant="h5">
                  {format(addDays(new Date(), 1), 'MMM dd')}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" px={2}>
                <WbSunnyTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[50]}`
                  }}
                  variant="h5"
                >
                  10<sup>°</sup>
                </Typography>
              </Box>
              <Box
                mx={1}
                sx={{
                  width: '35%'
                }}
              >
                <LinearHighLow />
              </Box>
              <Box>
                <Typography variant="h5">
                  21<sup>°</sup>
                </Typography>
              </Box>
            </Stack>
            <DividerWrapper
              sx={{
                my: 2
              }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                sx={{
                  width: 65
                }}
              >
                <Typography fontWeight="normal" variant="h5">
                  {format(addDays(new Date(), 2), 'MMM dd')}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" px={2}>
                <GrainTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[50]}`
                  }}
                  variant="h5"
                >
                  13<sup>°</sup>
                </Typography>
              </Box>
              <Box
                mx={1}
                sx={{
                  width: '35%'
                }}
              >
                <LinearHighLow />
              </Box>
              <Box>
                <Typography variant="h5">
                  18<sup>°</sup>
                </Typography>
              </Box>
            </Stack>
            <DividerWrapper
              sx={{
                my: 2
              }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                sx={{
                  width: 65
                }}
              >
                <Typography fontWeight="normal" variant="h5">
                  {format(addDays(new Date(), 3), 'MMM dd')}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" px={2}>
                <AirTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[50]}`
                  }}
                  variant="h5"
                >
                  12<sup>°</sup>
                </Typography>
              </Box>
              <Box
                mx={1}
                sx={{
                  width: '35%'
                }}
              >
                <LinearHighLow />
              </Box>
              <Box>
                <Typography variant="h5">
                  17<sup>°</sup>
                </Typography>
              </Box>
            </Stack>
            <DividerWrapper
              sx={{
                my: 2
              }}
            />
          </BoxWeather>
        </Grid>
      </WeatherBoxContent>
    </WeatherBox>
  );
}

export default Weather;
