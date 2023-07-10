import { useState, useEffect } from 'react';

import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';
import { useTranslation } from 'react-i18next';
import Link from 'src/components/Link';
import {
  Grid,
  Typography,
  Button
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useAuth } from 'src/hooks/useAuth';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import MaintenanceTable from './Results';
import { getMaintenance } from "@/utils/db_service";

function ManagementCars() {
  const createUrl = '/maintenance/create';
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();
  const [maintenance, setMaintenance] = useState<any | null>(null);

  useEffect(() => {
    if (user?.company_id) {
      getMaintenance(user?.company_id).then(setMaintenance);
    }
  }, [user]);




  return (
    <>
      <Head>
        <title>{t('maintenance_title')}</title>
      </Head>
      <PageTitleWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              {t('maintenance_title')}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{
                mt: { xs: 2, sm: 0 }
              }}
              component={Link}
              href={createUrl}
              variant="contained"
              startIcon={<AddTwoToneIcon fontSize="small" />}
            >
              {t('Add')}
            </Button>
          </Grid>
        </Grid>
      </PageTitleWrapper>

      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <MaintenanceTable initialData={maintenance} />
        </Grid>
      </Grid>
    </>
  );
}

ManagementCars.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementCars;
