import {
    FC,
    ChangeEvent,
    useState,
} from 'react';

// import PropTypes from 'prop-types';
import {
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
    TextField,
    Typography,
    TableSortLabel
} from '@mui/material';
import Link from 'src/components/Link';
import Label from 'src/components/Label';
import { useTranslation } from 'react-i18next';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DeleteDialog from '@/utils/delete';
import { Maintenance } from '@/models/maintenances';



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
            id: 'maintenance_data',
            numeric: false,
            label: t('maintenance_data'),
            align: 'left'
        },
        {
            id: 'maintenance_car',
            numeric: false,
            label: t('maintenance_car'),
            align: 'left'
        },
        {
            id: 'maintenance_mileage',
            numeric: false,
            label: t('maintenance_mileage'),
            align: 'center'
        },
        {
            id: 'maintenance_job_type',
            numeric: true,
            label: t('maintenance_job_type'),
            align: 'left'
        },
        {
            id: 'maintenance_sum',
            numeric: true,
            label: t('maintenance_sum'),
            align: 'left'
        },
        {
            id: 'maintenance_status',
            numeric: true,
            label: t('maintenance_status'),
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
    initialData: Maintenance[];
}


const MaintenanceTable: FC<ResultsProps> = ({ initialData }) => {
    const { t }: { t: any } = useTranslation();
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [query, setQuery] = useState<string>('');

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
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('data');
    const handleRequestSort = (_event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    const getMaintenanceStatus = (maintenanceStatus: string, t1: string, t2: string, t3: string, t4: string): JSX.Element => {

        const map = {
            done: {
                text: t4,
                color: 'success'
            },
            in_work: {
                text: t3,
                color: 'error'
            },
            waiting: {
                text: t1,
                color: 'info'
            },
            paid: {
                text: t2,
                color: 'warning'
            }
        };

        const { text, color }: any = map[maintenanceStatus];

        return <Label color={color}>{text}</Label>;
    };


    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent={{ xs: 'center', sm: 'space-between' }}
                pb={3}
            >
            </Box>
            <Card>
                <Box p={2}>
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

                {initialData?.length === 0 ? (
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
                                    rowCount={initialData?.length}
                                />
                                <TableBody>
                                    {stableSort(initialData, getComparator(order, orderBy))
                                        ?.slice(page * limit, page * limit + limit)
                                        ?.map((row) => {
                                            return (
                                                <TableRow hover key={row?.id}>
                                                    <TableCell >
                                                        <Link
                                                            href={'/maintenance/details/' + row?.id}>
                                                            {new Intl.DateTimeFormat('ru-Ru', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(row.maintenance_data_start)}
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography>
                                                            {row?.maintenance_car}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography>{row?.maintenance_mileage}</Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography>{row?.maintenance_job_type === 'repair' ? t('Repair') : row?.maintenance_job_type === 'maintenance' ? t('Maintenance') : row?.maintenance_job_type === 'car_accident' ? t('CarAccident') : ''}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography>{row?.maintenance_total_price}</Typography>
                                                    </TableCell>
                                                    <TableCell>{getMaintenanceStatus(row?.maintenance_status, t('Waiting'), t('Paid'), t('InWork'), t('Done'))}</TableCell>
                                                    <TableCell align="center">
                                                        <Typography noWrap>
                                                            <Tooltip title={t('View')} arrow>
                                                                <IconButton
                                                                    color="primary">
                                                                    <Link
                                                                        href={'/maintenance/details/' + row?.id}>
                                                                        <LaunchTwoToneIcon fontSize="small" />
                                                                    </Link>
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Tooltip title={t('Delete')} arrow>
                                                                <DeleteDialog collection='maintenance' document={row?.id} />
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
                                count={initialData?.length}
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
export default MaintenanceTable;
