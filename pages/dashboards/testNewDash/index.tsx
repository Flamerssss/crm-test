import Head from 'next/head';
import { Box } from '@mui/material';
import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
// import { useAuth } from 'src/hooks/useAuth';
// import { useTranslation } from 'react-i18next';
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);
import Block2 from '../general/components/Block2';
// import Block1 from '../general/components/Block1';
import _ from 'lodash';



function DashboardGeneralTest() {

  const layout = [
    { i: "Block2", x: 0, y: 0, w: 1, h: 2 },
    { i: "Block1", x: 1, y: 0, w: 3, h: 2 },
  ];

  const defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: layout?.length,
    rowHeight: 30,
    onLayoutChange: function () { },
    cols: 12
  };

  function onLayoutChange(layout) {
    onLayoutChange(layout);
  }


  function onResize(layoutItem, placeholder) {
    // `oldLayoutItem` contains the state of the item before the resize.
    // You can modify `layoutItem` to enforce constraints.

    if (layoutItem.h < 3 && layoutItem.w > 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }

    if (layoutItem.h >= 3 && layoutItem.w < 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }
  }


  function generateDOM() {
    // Generate items with properties from the layout, rather than pass the layout directly
    return _.map(layout, function (l) {
      return (
        <div key={l.i} data-grid={l}>
          {l.i == 'Block2' && <Block2 />}
          {/* {l.i == 'Block1' && <Block1 />} */}
        </div>
      );
    });
  }


  // const { user } = useAuth();
  // const { t }: { t: any } = useTranslation();



  return (
    <>
      <Head>
        <title>General Dashboard</title>
      </Head>
      <Box p={4}>
        <ReactGridLayout
          onLayoutChange={onLayoutChange}
          onResize={onResize}
          {...defaultProps}
        >
          {generateDOM()}
        </ReactGridLayout>
        {/* <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1500}
        >

          {layout.map((e) =>
            e.i == 'a' && <div key="a">

              <Block2 />

            </div>
          )}
          <div key="b">b</div>
          <div key="c">c</div>

        </GridLayout> */}
      </Box>
    </>
  );
}

DashboardGeneralTest.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardGeneralTest;

