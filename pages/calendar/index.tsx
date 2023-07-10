// material-ui
import {
  Box,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "firebase/compat/firestore";
import BlockEvents from "./sfScheduler/calendar";
import { Authenticated } from '@/components/Authenticated';
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';
import { observer } from "mobx-react-lite";
import contractsStore from '../../src/store/contracts_store';
import companyStore from '../../src/store/company_store';
import tripsStore from '../../src/store/trips_store';
import carStore from '../../src/store/car_store';



const RootWrapper = styled(Box)(
  () => `
    flex: 1;
`
);
// ===============================|| UI DIALOG - SWEET ALERT ||=============================== //

function CalendarPage() {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid
      sx={{ px: 4 }}
      container
      direction="row"
      justifyContent="start"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12}>
        <Box
          mt={3}
          display="flex"
          alignItems="center"
        >
          <RootWrapper>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h3" component="h3" gutterBottom>
                      {t('Calendar')}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </RootWrapper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {/* @ts-ignore */}
        {companyStore.company_profile['type'] != 'carsharing' ? contractsStore.contracts && carStore.cars && <BlockEvents dataCars={carStore.cars} dataContracts={contractsStore.contracts} /> : tripsStore.trips && carStore.cars && <BlockEvents dataCars={carStore.cars} dataContracts={tripsStore.trips} />}
      </Grid>
    </Grid>
  );
}

CalendarPage.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);
export default observer(CalendarPage);