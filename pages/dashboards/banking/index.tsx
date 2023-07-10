import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import {
  Grid,
} from '@mui/material';
import BankAccounts from './components/BankAccounts';
import Income from './components/Income';
import Block7 from './components/Block7';
import Expenses from './components/Expenses';

function DashboardBanking() {
  return (
    <>
      <Head>
        <title>Banking Dashboard</title>
      </Head>
      <Grid
        sx={{ px: 4, pt: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item md={6} xs={12}>
          <BankAccounts />
        </Grid>
        <Grid item md={6} xs={12}>
          <Income />
          <Grid item md={12} xs={12} sx={{ pt: 2 }}>
            <Expenses />
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Block7 />
        </Grid>
      </Grid>
    </>
  );
}

DashboardBanking.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardBanking;
