import { useState, SyntheticEvent, useEffect } from 'react';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';
import Head from 'next/head';
import {
  Box,
  Grid,
  styled,
  Tabs,
  Tab,
} from '@mui/material';

import { useAuth } from 'src/hooks/useAuth';
import { getAllFleets } from "@/utils/db_service";
import CustomerCountries from './components/CustomerCountries';
import NewClients from './components/NewClients';
import UserInfoBlock from './components/UserInfoBlock';
import BestUsers from './components/BestUsers';
import AgeOfСlients from './components/AgeOfСlients';
import CountriesMap from './components/CountriesMap';

interface Filters {
  id?: string;
}

const TabsWrapper = styled(Tabs)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.md}px) {
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          box-shadow: none;
      }
    }
    `
);

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(2)};
  `
);

const MainContentWrapper = styled(Box)(
  () => `
  flex-grow: 1;
`
);


const RootWrapper = styled(Box)(
  () => `
    flex: 1;
`
);

function ClientDahsboard() {
  const { user } = useAuth();
  const [fleets, setFleets] = useState<any | null>(null);
  const [fleetID, setFleetID] = useState<Filters>({
    id: null,
  });



  const handleTabsChange = (_event: SyntheticEvent, tabsValue: unknown) => {
    let value = null;
    // if (tabsValue !== 'all') {
    value = tabsValue;
    // }
    setFleetID((prevFilters) => ({
      ...prevFilters,
      id: value
    }));
  };



  useEffect(() => {
    if (fleets) {
      setFleetID((prevFilters) => ({
        ...prevFilters,
        id: fleets[0]?.id
      }));
    }
  }, [fleets]);

  useEffect(() => {
    if (user?.company_id) {
      getAllFleets(user?.company_id).then(setFleets);
    }
  }, [user]);

  console.log('fleetID', fleetID)


  return (
    <>
      <Head>
        <title>Create Product - Commerce Management</title>
      </Head>
      <Box mb={3} display="flex">
        <MainContentWrapper>
          <Grid
            container
            direction="row"
            justifyContent="start"
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <Box
                display="flex"
                alignItems="center"
              >
                <RootWrapper>
                  <TabsContainerWrapper>
                    <TabsWrapper
                      onChange={handleTabsChange}
                      scrollButtons="auto"
                      textColor="secondary"
                      value={fleetID?.id}
                      variant="scrollable"
                    >
                      {fleets?.map((tab) => (
                        <Tab key={tab.id} value={tab.id} label={tab.fleet_title} />
                      ))}
                    </TabsWrapper>
                  </TabsContainerWrapper>

                </RootWrapper>
              </Box>
            </Grid>
            <Grid
              sx={{ px: 4 }}
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item lg={8} md={6} xs={12}>
                <Grid
                  container
                  spacing={3}
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                >
                  <Grid item xs={12}>
                    <NewClients />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <UserInfoBlock />
              </Grid>
              <Grid item md={6} xs={12}>
                <BestUsers />
              </Grid>
              <Grid item md={6} xs={12}>
                <AgeOfСlients />
              </Grid>
              <Grid item md={6} xs={12}>
                <CountriesMap />
              </Grid>
              <Grid item md={6} xs={12}>
                <CustomerCountries />
              </Grid>
            </Grid>
          </Grid>
        </MainContentWrapper>
      </Box>
    </>
  );
}

ClientDahsboard.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ClientDahsboard;
