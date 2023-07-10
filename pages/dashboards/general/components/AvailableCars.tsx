import {
  FC,
  ChangeEvent,
  SyntheticEvent,
  useState,
  useEffect
} from 'react';

// import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Divider,
  Tooltip,
  IconButton,
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
  styled
} from '@mui/material';
import Link from 'src/components/Link';

import type Car from 'src/models/cars';
import type { Fleet } from 'src/models/fleets';
import { useTranslation } from 'react-i18next';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
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

interface ResultsProps {
  cars: Car[];
  fleets: Fleet[];
  title: string;
}

interface Filters {
  id?: string;
}

const getCarsStatus = (carStatus: string, t1: string, t2: string, t3: string, t4: string): JSX.Element => {

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

      if (car.car_fleet_id !== filters.id) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      if (filters[key] !== car.car_fleet_id) {
        matches = false;
      }
    });
    return matches;
  });
};

const applyPagination = (
  cars: Car[],
  page: number,
  limit: number
): Car[] => {
  return cars?.slice(page * limit, page * limit + limit);
};

const AvailableCars: FC<ResultsProps> = ({ cars, fleets, title }) => {
  const [selectedItems, setSelectedUsers] = useState<string[]>([]);
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

    setSelectedUsers([]);
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
  const paginatedCars = applyPagination(filteredCars, page, limit);




  return (
    <>
      <Typography variant="h3">{t(title)}</Typography>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        pb={3}
        pt={2}
      >

        <TabsWrapper
          onChange={handleTabsChange}
          scrollButtons="auto"
          textColor="secondary"
          value={filters.id}
          variant="scrollable"
        >
          {fleets?.map((tab) => (
            <Tab key={tab.id} value={tab.id} label={tab.fleet_title} />
          ))}
        </TabsWrapper>
      </Box>
      <Card>
        <Box>
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
        </Box>

        <Divider />

        {paginatedCars?.length === 0 ? (
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
                <TableHead>
                  <TableRow>
                    <TableCell>{t('car_model_full')} / {t('car_license_plate')}</TableCell>
                    <TableCell>{t('car_class')}</TableCell>
                    <TableCell align="center">{t('car_category')}</TableCell>
                    <TableCell>{t('car_year_issue')}</TableCell>
                    <TableCell>{t('car_vin')}</TableCell>
                    <TableCell>{t('car_status')}</TableCell>
                    <TableCell align="center">{t('Actions')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedCars?.map((car) => {
                    const isUserSelected = selectedItems.includes(car?.id);
                    return (
                      <TableRow hover key={car?.id} selected={isUserSelected}>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Avatar
                              sx={{
                                mr: 1
                              }}
                              src={car?.car_image}
                            />
                            <Box>
                              <Link
                                variant="h5"
                                href={'/cars/profile/' + car?.id}
                              >
                                {car?.car_model_full}
                              </Link>
                              {/* <Link href={{ pathname: '/cars/profile/' + car?.id, query: car }}>
                              {car?.car_model_full}
                            </Link> */}
                              <Typography noWrap variant="subtitle2">
                                {car?.car_license_plate}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography>{car?.car_class}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>
                            {car?.car_category}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography>{car?.car_year_issue}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{car?.car_vin}</Typography>
                        </TableCell>
                        <TableCell>{getCarsStatus(car?.car_status, t('Available'), t('Inservice'), t('Booked'), t('InRent'))}</TableCell>
                        <TableCell align="center">
                          <Typography noWrap>
                            <Tooltip title={t('View')} arrow>
                              <IconButton
                                color="primary">
                                <Link
                                  href={'/cars/profile/' + car?.id}>
                                  <LaunchTwoToneIcon fontSize="small" />
                                </Link>
                              </IconButton>
                            </Tooltip>
                          </Typography>
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
    </>
  );
};

export default AvailableCars;
