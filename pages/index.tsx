import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';
import DashboardGeneral from 'pages/dashboards/general';

function DashboardReports() {
  return (
    <>
      <Head>
        <title>General Dashboard</title>
      </Head>
      <DashboardGeneral />
    </>
  );
}

DashboardReports.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardReports;
