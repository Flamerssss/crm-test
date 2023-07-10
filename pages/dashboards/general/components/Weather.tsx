import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';


const WeatherBox = styled(Card)(
  ({ theme }) => `
      background: ${theme.colors.gradients.black1};
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

    border-radius: ${theme.general.borderRadius};
`
);



function Weather({ coords }) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
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

                    pt: 2,

                    fontWeight: 'bold',
                    fontSize: `${theme.typography.pxToRem(45)}`
                  }}
                  variant="h1"
                >
                  {weather?.list[0]?.main.temp.toFixed(0)}<sup>°</sup>
                </Typography>
                <Typography
                  noWrap
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
              </Grid>
            </Grid>
          </BoxWeather>
        </Grid>
      </WeatherBoxContent>
    </WeatherBox>
  );
}

export default Weather;
