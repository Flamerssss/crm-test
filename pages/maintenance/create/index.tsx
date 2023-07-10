import { useState, useEffect } from 'react';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Link from 'src/components/Link';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import {
  Box,
  Grid,
  Hidden,
  IconButton,
  styled,
  Typography,
  Button,
  Zoom,
} from '@mui/material';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useSnackbar } from 'notistack';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useAuth } from 'src/hooks/useAuth';
import Footer from '@/components/Footer';
import MaintenanceEditor from '../EditorBody';
import { Maintenance } from '@/models/maintenances';
import { getAllCars, getProviders } from "@/utils/db_service";


const MainContentWrapper = styled(Box)(
  () => `
  flex-grow: 1;
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

const RootWrapper = styled(Box)(
  () => `
    flex: 1;
`
);

function MaintenanceCreate() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const [data, setData] = useState<Maintenance | null>(null);

  async function onSave() {

    if (!data?.id) {
      const documentRef = await firebase
        .firestore()
        .collection('maintenance')
        .add(data);

      const dataWithId = {
        ...data,
        id: documentRef.id,
        created_at: new Date(),
        company_id: user?.company_id,
        author_user_id: user?.id,
        selectedRepairs: selectedRepairs ? selectedRepairs : []
      };
      await documentRef.set(dataWithId);


      setData({
        ...data,
        id: documentRef.id,
      })

    } else {
      await firebase
        .firestore()
        .collection("maintenance")
        .doc(data?.id)
        .update(data);
    }

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
      <Head>
        <title>{t('maintenance_add_title')}</title>
      </Head>
      <Box mb={3} display="flex">
        <MainContentWrapper>
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
              // justifyContent="space-between"
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
                            {t('maintenance_add_title')}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={{
                          mt: { xs: 2, sm: 0 }
                        }}
                        component={Link}
                        startIcon={<ArrowBackTwoToneIcon />}
                        href="/maintenance"
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
                </RootWrapper>
                <Hidden lgUp>
                  <IconButtonToggle
                    sx={{ ml: 2 }}
                    color="primary"
                    onClick={handleDrawerToggle}
                    size="small"
                  >
                    <MenuTwoToneIcon />
                  </IconButtonToggle>
                </Hidden>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <MaintenanceEditor
                data={data}
                setData={(initialData) => {
                  setData(initialData)
                }}
                allCars={allCars}
                providers={providers}
                getSelectedRepairs={(selectedRepairs) => {
                  handleChangeSelectedRepairs(selectedRepairs)
                }}
              />
            </Grid>
          </Grid>
        </MainContentWrapper>
      </Box>
      <Footer />
    </>
  );
}

MaintenanceCreate.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default MaintenanceCreate;
