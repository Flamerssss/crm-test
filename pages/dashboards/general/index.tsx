import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Grid, Box } from '@mui/material';
import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import Weather from './components/Weather';
import Block1 from './components/Block1';
import RentAndBooked from './components/RentAndBooked';
import { useAuth } from 'src/hooks/useAuth';
import { getAllCars, getAvailableCars, getInRentCars, getBookedCars, getInServiceCars, getInRentCarsContracts, getBookedCarsContracts } from "@/utils/db_service";
import AvailableCars from './components/AvailableCars';
import Demo from './components/geo';
import { firebaseCloudMessaging } from '@/utils/firebase_message';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { MobxContext } from "../../_app";

function DashboardGeneral() {
  //@ts-ignore
  const { carsStore } = useContext(MobxContext);
  const { user } = useAuth();
  const [allCar, setAllCars] = useState<any | null>(null);
  const [availableCars, setAvailableCars] = useState<any | null>(null);
  const [inRentCars, setInRentCars] = useState<any | null>(null);
  const [bookedCar, setBookedCars] = useState<any | null>(null);
  const [inservice, setInservice] = useState<any | null>(null);
  const [fleets, setFleets] = useState<any | null>(null);

  const [inRentCarsContracts, setInRentCarsContracts] = useState<any | null>(null);
  const [bookedCarContracts, setBookedCarsContracts] = useState<any | null>(null);

  const getAllFleets = () => {
    const dbRef = firebase.firestore().collection("fleets").where('company_id', '==', user?.company_id)

    dbRef.onSnapshot((collection) => {
      const array_data = [];
      collection.forEach((doc) => array_data.push(doc.data()));
      setFleets(array_data.sort((a, b) => a.created_at > b.created_at ? 1 : -1));
    });
  };

  useEffect(() => {
    if (user?.company_id) {
      getAllCars(user?.company_id).then(setAllCars);
      getAvailableCars(user?.company_id).then(setAvailableCars);
      getInRentCars(user?.company_id).then(setInRentCars);
      getBookedCars(user?.company_id).then(setBookedCars);
      getInRentCarsContracts(user?.company_id).then(setInRentCarsContracts);
      getBookedCarsContracts(user?.company_id).then(setBookedCarsContracts);
      getInServiceCars(user?.company_id).then(setInservice);
      getAllFleets();
      // carsStore.testfetchCars()
    }
  }, [user]);


  const [coords, setCoords] = useState<any | null>(null);
  const getsetCoords = (urlPhoto) => {
    setCoords(urlPhoto)
  };

  const [mounted, setMounted] = useState(false);
  if (mounted) {
    firebaseCloudMessaging.onMessage();
  }
  useEffect(() => {
    firebaseCloudMessaging.init();
    const setToken = async () => {
      const token = await firebaseCloudMessaging.tokenInlocalforage();
      if (token) {
        setMounted(true);
        // not working
      }
    };
    const result = setToken();
    console.log("result", result);
  }, []);


  return (
    <>
      <Head>
        <title>General Dashboard</title>
      </Head>
      <Box p={4}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          columns={12}
        >
          <Grid item xs={4} lg={3}>
            <Weather coords={coords} />
          </Grid>
          <Grid item xs={8} lg={9}>
            <Block1
              allCar={allCar?.length}
              availableCars={availableCars?.length}
              inRentCars={inRentCars?.length}
              bookedCar={bookedCar?.length}
              inservice={inservice?.length} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <RentAndBooked title={'dashboard_car_inRent'} cars={inRentCarsContracts} fleets={fleets} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <RentAndBooked title={'dashboard_car_booked'} cars={bookedCarContracts} fleets={fleets} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <AvailableCars title={'dashboard_car_available'} cars={availableCars} fleets={fleets} />
          </Grid>
        </Grid>
      </Box>
      <Demo
        getCoords={(cords) => {
          getsetCoords(cords)
        }}
      />
    </>
  );
}

DashboardGeneral.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default observer(DashboardGeneral);

