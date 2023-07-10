import { useState, useEffect } from 'react';
import Head from 'next/head';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';
import Footer from 'src/components/Footer';
import { Box, Grid, Typography, Button, Zoom } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import Link from 'src/components/Link';
import { useAuth } from 'src/hooks/useAuth';
import { getWhere, getAllCars, getProviders } from "@/utils/db_service";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import MaintenanceEditor from '../EditorBody';
import { Maintenance } from '@/models/maintenances';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useSnackbar } from 'notistack';

function MaintenanceDetailsIndex() {
  const initialDataID = window.location.pathname.replace('/maintenance/details/', '');
  const backUrl = '/maintenance';
  const { enqueueSnackbar } = useSnackbar();
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();

  const [initialDataPrepared, setInitialData] = useState<any | null>(null);
  useEffect(() => {
    if (user?.company_id) {
      getWhere('maintenance', user?.company_id, 'id', initialDataID).then(setInitialData);
    }
  }, [user]);

  const obj = Object.assign({}, initialDataPrepared);
  const initialData = { ...obj[0] };

  const [data, setData] = useState<Maintenance | null>(null);

  async function onSave() {
    const documentRef = await firebase
      .firestore()
      .collection('maintenance')
      .doc(data?.id);

    const dataWithId = {
      ...data,
      update_at: new Date(),
      update_author_id: user?.id,
      selectedRepairs: selectedRepairs ? selectedRepairs : data.selectedRepairs
    };
    await documentRef.update(dataWithId);


    if (data?.maintenance_status === 'InWork') {
      await firebase
        .firestore()
        .collection("cars")
        .doc(data?.maintenance_car_id)
        .update({
          car_status: 'Inservice'
        });
    } else {
      await firebase
        .firestore()
        .collection("cars")
        .doc(data?.maintenance_car_id)
        .update({
          car_status: 'Available'
        });
    }

    enqueueSnackbar(t('Saved'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  };


  useEffect(() => {
    if (!initialData?.id) return;
    setData(initialData);
  }, [initialData?.id]);


  const [allCars, setAllCars] = useState<any | null>(null);
  const [providers, setProviders] = useState<any | null>(null);
  useEffect(() => {
    if (user?.company_id) {
      getAllCars(user?.company_id).then(setAllCars);
      getProviders(user?.company_id).then(setProviders);
    }
  }, [user]);


  const [selectedRepairs, setSelectedRepairs] = useState<any | null>(null);
  const handleChangeSelectedRepairs = (urlPhoto) => {
    setSelectedRepairs(urlPhoto)
  };


  return (
    <>
      <Box display="flex" style={{ marginTop: 30, marginRight: 50, }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box style={{ marginLeft: 30, marginTop: 5 }}>
              <Typography variant="h3" component="h3" gutterBottom>
                {t('maintenance_title')} {new Intl.DateTimeFormat('ru-Ru', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(data?.photoRew_data)}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button
              sx={{
                mt: { xs: 2, sm: 0 }
              }}
              component={Link}
              startIcon={<ArrowBackTwoToneIcon />}
              href={backUrl}
              variant="text"
            >
              {t('Back')}
            </Button>
            <Button
              sx={{
                mt: { xs: 2, sm: 0 }
              }}
              startIcon={<SaveOutlinedIcon />}
              onClick={() => onSave()}
              variant="contained"
              style={{ marginLeft: 30 }}
            >
              {t('Save')}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Head>
        <title>{t('maintenance_title')} - {t('Details')}</title>
      </Head>
      <Box sx={{ mt: 3 }}>
        <Grid
          sx={{ px: 4 }}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={12}>
            <MaintenanceEditor
              data={data}
              setData={(dataDoc) => {
                setData(dataDoc);
              }}
              allCars={allCars}
              providers={providers}
              getSelectedRepairs={(selectedRepairs) => {
                handleChangeSelectedRepairs(selectedRepairs)
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

MaintenanceDetailsIndex.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default MaintenanceDetailsIndex;

