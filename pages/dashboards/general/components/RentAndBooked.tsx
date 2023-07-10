import {
  FC,
  ChangeEvent,
  SyntheticEvent,
  useState,
  useEffect
} from 'react';

// import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Divider,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  Tab,
  Tabs,
  TextField,
  Typography,
  styled,
  TableSortLabel,
} from '@mui/material';
import Link from 'src/components/Link';
import type Car from 'src/models/cars';
import type { Fleet } from 'src/models/fleets';
import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


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

// table sort
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  console.log('array', array)
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}

//-----------------------|| TABLE HEADER ||-----------------------//

function EnhancedTableHead(props) {
  const { t }: { t: any } = useTranslation();
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headCells = [
    {
      id: 'contract_number',
      numeric: false,
      label: t('contract_number'),
      align: 'left'
    },
    {
      id: 'contract_car',
      numeric: false,
      label: `${t('car_model_full')} / ${t('car_license_plate')}`,
      align: 'left'
    },
    {
      id: 'contract_client',
      numeric: false,
      label: t('leaseСontract_client'),
      align: 'left'
    },
    {
      id: 'contract_client_phone',
      numeric: false,
      label: t('leaseСontract_client_phone'),
      align: 'center'
    },
    {
      id: 'contract_term',
      numeric: true,
      label: t('leaseСontract_term'),
      align: 'left'
    },
    {
      id: 'contract_end_date',
      numeric: false,
      label: t('leaseСontract_return_date'),
      align: 'left'
    },
    {
      id: 'contract_end_time',
      numeric: false,
      label: t('leaseСontract_return_time'),
      align: 'left'
    },
    {
      id: 'contract_balance',
      numeric: false,
      label: t('leaseСontract_return_balance'),
      align: 'left'
    },
    {
      id: 'contract_comment',
      numeric: false,
      label: t('leaseСontract_return_comment'),
      align: 'left'
    },
    {
      id: 'contract_car_delivery_status',
      numeric: false,
      label: t('contract_car_delivery_status'),
      align: 'left'
    },
    {
      id: 'contract_status',
      numeric: false,
      label: t('leaseСontract_car_status'),
      align: 'left'
    },

  ];


  return (
    <TableHead >
      <TableRow >

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            //align={headCell.align}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        {(<TableCell sortDirection={false} align="center" >
          {t('Actions')}
        </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}


interface ResultsProps {
  cars: Car[];
  fleets: Fleet[];
  title: string;
}

interface Filters {
  id?: string;
}

const getCarStatus = (carStatus: string, t1: string, t2: string, t3: string, t4: string): JSX.Element => {

  const map = {
    Available: {
      text: t1,
      color: 'success'
    },
    Inservice: {
      text: t2,
      color: 'error'
    },
    Booked: {
      text: t3,
      color: 'info'
    },
    InRent: {
      text: t4,
      color: 'warning'
    }
  };

  const { text, color }: any = map[carStatus];

  return <Label color={color}>{text}</Label>;
};


const getCarStatusDelivery = (carStatus: string, t1: string, t2: string, t3: string, t4: string): JSX.Element => {

  const map = {
    car_at_client: {
      text: t1,
      color: 'success'
    },
    not_delivered: {
      text: t2,
      color: 'error'
    },
    processing_transfer_to_client: {
      text: t4,
      color: 'warning'
    },
    delivered_to_client: {
      text: t3,
      color: 'info'
    },
  };

  const { text, color }: any = map[carStatus];

  return <Label color={color}>{text}</Label>;
};



const applyFilters = (
  cars: Car[],
  query: string,
  filters: Filters
): Car[] => {
  return cars?.filter((car) => {
    let matches = true;

    if (query) { //'car_class', 'car_location',
      const properties = ['car_model_full', 'car_category', 'car_owner', 'car_vin', 'car_status',];
      let containsQuery = false;

      properties.forEach((property) => {
        if (car[property]?.toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (car.contract_car_fleet_id !== filters.id) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      if (filters[key] !== car.contract_car_fleet_id) {
        matches = false;
      }
    });
    return matches;
  });
};

const RentAndBooked: FC<ResultsProps> = ({ cars, fleets, title }) => {
  const [selectedItems, setSelectedFleets] = useState<string[]>([]);
  const { t }: { t: any } = useTranslation();
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [query, setQuery] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    id: null,
  });


  useEffect(() => {
    if (fleets) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        id: fleets[0]?.id
      }));
    }
  }, [fleets]);

  const handleTabsChange = (_event: SyntheticEvent, tabsValue: unknown) => {
    let value = null;
    // if (tabsValue !== 'all') {
    value = tabsValue;
    // }
    setFilters((prevFilters) => ({
      ...prevFilters,
      id: value
    }));

    setSelectedFleets([]);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCars = applyFilters(cars, query, filters);
  const selectedBulkActions = selectedItems.length > 0;

  const [toggleView] = useState<string | null>('table_view');


  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('data');
  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };




  return (
    <>
      <Typography variant="h3">{t(title)}</Typography>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        pb={3}
      >
        <TabsWrapper
          onChange={handleTabsChange}
          scrollButtons="auto"
          textColor="secondary"
          value={filters.id}
          variant="scrollable"
          style={{ marginTop: 10 }}
        >
          {fleets?.map((tab) => (
            <Tab key={tab.id} value={tab.id} label={tab.fleet_title} />
          ))}
        </TabsWrapper>
      </Box>
      {toggleView === 'table_view' && (
        <Card>
          <Box p={2}>
            {!selectedBulkActions && (
              <TextField
                sx={{
                  m: 0
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  )
                }}
                onChange={handleQueryChange}
                placeholder={t('placeholderSearch')}
                value={query}
                size="small"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            )}
            {selectedBulkActions}
          </Box>

          <Divider />

          {filteredCars?.length === 0 ? (
            <>
              <Typography
                sx={{
                  py: 10
                }}
                variant="h3"
                fontWeight="normal"
                color="text.secondary"
                align="center"
              >
                {t("placeholderSearchNotFound")}
              </Typography>
            </>
          ) : (
            <>
              <TableContainer>
                <Table>
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={filteredCars?.length}
                  />
                  <TableBody>
                    {stableSort(filteredCars, getComparator(order, orderBy))
                      ?.slice(page * limit, page * limit + limit)
                      ?.map((car) => {
                        const isUserSelected = selectedItems.includes(car?.id);
                        console.log('car?.contract_status', car?.contract_car_delivery_status)
                        return (
                          <TableRow hover key={car?.id} selected={isUserSelected}>
                            <TableCell>
                              <Typography>

                                <Link
                                  variant="h5"
                                  href={'/cars/profile/' + car?.car_id}
                                >
                                  {car?.contract_number}
                                </Link></Typography>
                            </TableCell>
                            <TableCell>
                              <Box display="flex" alignItems="center">
                                <Box>
                                  <Link
                                    variant="h5"
                                    href={'/cars/profile/' + car?.car_id}
                                  >
                                    {car?.contract_car}
                                  </Link>
                                  <Typography noWrap variant="subtitle2">
                                    {car?.contract_car_license_plate}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography>{car?.contract_client}</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>
                                {car?.contract_client_phone}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography>{car?.contract_term}</Typography>
                            </TableCell>
                            <TableCell>
                              {new Intl.DateTimeFormat({
                                // @ts-ignore
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })?.format(car?.contract_end_date)}
                            </TableCell>
                            <TableCell>
                              {new Intl.DateTimeFormat("ru-Ru", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })?.format(car?.contract_end_time)}
                            </TableCell>
                            <TableCell>
                              <Typography>{car?.contract_balance}</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{car?.contract_comment}</Typography>
                            </TableCell>
                            {car?.contract_car_delivery_status && <TableCell>{getCarStatusDelivery(car?.contract_car_delivery_status, t('car_at_client'), t('not_delivered'), t('processing_transfer_to_client'), t('delivered_to_client'))}</TableCell>}
                            {car?.contract_status && <TableCell>{getCarStatus(car?.contract_status, t('Available'), t('Inservice'), t('Booked'), t('InRent'))}</TableCell>}
                            <TableCell align="center">
                              {/* <Typography noWrap>
                                <Tooltip title={t('View')} arrow>
                                  <IconButton
                                    color="primary">
                                    <Link
                                      href={'/cars/profile/' + car?.car_id}>
                                      <LaunchTwoToneIcon fontSize="small" />
                                    </Link>
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title={t('Delete')} arrow>
                                  <DeleteDialog collection='cars' document={car.id} />
                                </Tooltip>
                              </Typography> */}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box p={2}>
                <TablePagination
                  component="div"
                  count={filteredCars?.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  labelRowsPerPage={t('RowsPerPage')}
                  rowsPerPageOptions={[5, 10, 20, 50]}
                />
              </Box>
            </>
          )}
        </Card>
      )}
    </>
  );
};
export default RentAndBooked;

