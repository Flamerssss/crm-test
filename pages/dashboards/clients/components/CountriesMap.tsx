import {
  useEffect
} from 'react';

import {
  CardHeader,
  Divider,
  Card,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import svgMap from '@tekhece/svgmap-next2'
import '@tekhece/svgmap-next2/dist/svgMap.min.css';


function CountriesMap() {
  const { t }: { t: any } = useTranslation();

  useEffect(() => {
    new svgMap({
      targetElementID: 'svgMap',
      data: {
        data: {
          gdp: {
            name: 'GDP per capita',
            format: '{0} USD',
            thousandSeparator: ',',
            thresholdMax: 50000,
            thresholdMin: 1000
          },
          change: {
            name: 'Change to year before',
            format: '{0} %'
          }
        },
        applyData: 'gdp',
        values: {
          RU: { gdp: 1000, change: 10.01 },
          DE: { gdp: 1000, change: 10.01 },
          FR: { gdp: 1000, change: 10.01 },
          ES: { gdp: 1000, change: 10.01 },
          CN: { gdp: 1000, change: 10.01 }
          // ...
        }
      }
    });
  }, [])

  return (
    <Card>
      <CardHeader title={t('dashboard_clients_сustomer_countries')} />
      <Divider />
      <div id="svgMap"></div>
    </Card>
  );
}

export default CountriesMap;
