import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ThemeProvider from 'src/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import { appWithTranslation } from 'next-i18next';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import Loader from 'src/components/Loader';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import useScrollTop from 'src/hooks/useScrollTop';
import { SnackbarProvider } from 'notistack';
import { AuthConsumer, AuthProvider } from 'src/contexts/FirebaseAuthContext';
import { createContext } from "react";
import { useStore } from "../src/store";


import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../node_modules/@syncfusion/ej2-navigations/styles/material.css"
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";

/* refer the styles from package folder */
import '../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css';
import '../node_modules/@syncfusion/ej2-icons/styles/bootstrap5.css';
import '../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css';
import '../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css';
import '../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css';
import '../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.css';
import '../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css';
import '../node_modules/@syncfusion/ej2-layouts/styles/bootstrap5.css';
import '../node_modules/@syncfusion/ej2-grids/styles/bootstrap5.css';
import "../node_modules/@syncfusion/ej2-react-filemanager/styles/bootstrap5.css";

import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

import "./car_damages.css";
import "./calendar_style.css";

import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-datepicker/dist/react-datepicker.css";
import 'photoviewer/dist/photoviewer.css';

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}
//@ts-ignore
export const MobxContext = createContext();

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore(pageProps.initialState);
  const getLayout = Component.getLayout ?? ((page) => page);
  useScrollTop();

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Car-Sense - Rental Management System</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <MobxContext.Provider value={store}>
        <SidebarProvider>
          <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <AuthProvider>
                <SnackbarProvider
                  maxSnack={6}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                >
                  <CssBaseline />
                  <AuthConsumer>
                    {(auth) =>
                      !auth.isInitialized ? (
                        <Loader />
                      ) : (
                        getLayout(<Component {...pageProps} />)
                      )
                    }
                  </AuthConsumer>
                </SnackbarProvider>
              </AuthProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </SidebarProvider>
      </MobxContext.Provider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
