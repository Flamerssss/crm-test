import React, {
    useEffect,
    useState,
} from "react";
import {
    Card,
    CardContent,
    Divider,
    TextField,
    Grid,
    Box,
    RadioGroup,
    Autocomplete,
    FormControlLabel,
    Radio,
    Typography,
    // Button
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import TimePicker from "@mui/lab/TimePicker";
import moment from "moment";
import { useTranslation } from 'react-i18next';
import { useAuth } from 'src/hooks/useAuth';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import type Car from '@/models/cars';
// import { Staff } from '@/models/staff';

function CalendarContractMain({ data, car, staffs, tariffs, setData, startDataTime, endDataTime, car_id }) {
    console.log('staffs', staffs)
    const { t }: { t: any } = useTranslation();
    const [diffTime, setDiffData] = useState();
    // const [openAddNewUser, setOpenAddNewUser] = useState(false);
    const { user } = useAuth();
    const daysLeft = (data) => {
        const timestampSTART = new Date(data?.contract_start_date).getTime();
        const timestampEND = new Date(data?.contract_end_date).getTime();
        const startDate = moment(timestampSTART);
        const timeEnd = moment(timestampEND);
        const diff = timeEnd.diff(startDate, "days");
        //@ts-ignore
        setDiffData(diff);
    };

    useEffect(() => {
        daysLeft(data);
    }, [data?.contract_start_date, data?.contract_end_date]);

    const [tariff, setTariff] = useState();
    useEffect(() => {
        const foundTarif = tariffs?.filter(
            (tariff) => tariff?.id === data?.tariff_id
        )[0];

        setTariff(foundTarif);
    }, [data?.tariff_id]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!data?.tariff_id) return;
        //@ts-ignore
        if (diffTime < 1) return;
        if (!tariff) return;
        //@ts-ignore
        const durations = tariff?.durations?.map((el) => el.tariff_do);
        //@ts-ignore
        let nearest_do_value = durations?.filter((el) => el >= diffTime)?.sort((a, b) => a - b)[0];
        if (!nearest_do_value) {
            nearest_do_value = durations?.sort((a, b) => a - b).pop();
        }
        //@ts-ignore
        const valid_tariff = tariff?.durations?.find(
            (el) => el.tariff_do === nearest_do_value
        );
        if (!valid_tariff) return;
        const price = valid_tariff.price;
        setData({
            ...data,
            //@ts-ignore
            contract_tariff: price * (diffTime + 1),
            //@ts-ignore
            // contract_accrued: price * diffTime,
            // //@ts-ignore
            contract_total: price * (diffTime + 1),
            //@ts-ignore
            contract_term: diffTime + 1,
            oneDayPrice: price,
        });
    }, [
        diffTime,
        data?.oneDayPrice,
        data?.contract_tariff,
        data?.contract_term,
        tariff,
        data?.tariff_id,
        // data?.contract_end_time,
    ]);

    const [clients, setAllClients] = useState<any | null>(null);
    const getAllClients = () => {
        const dbRef = firebase.firestore().collection("clients").where("company_id", '==', user?.company_id);

        dbRef.onSnapshot((collection) => {
            const clients = [];
            collection.forEach((doc) => clients.push(doc.data()));
            setAllClients(clients);
        });
    };

    useEffect(() => {
        if (user?.company_id) {
            getAllClients();
        }
    }, [user]);


    useEffect(() => {
        if (!car.id) return;
        setData({
            ...data,
            car_id: car_id,
            contract_start_date: Date.parse(startDataTime),
            contract_end_date: Date.parse(endDataTime),
            contract_start_time: Date.parse(Date()),
            contract_end_time: Date.parse(Date()),
            contract_car: car?.car_model_full,
            contract_fuel_start: car?.car_fuel_level,
            contract_mileage_start: car?.car_mileage,
            tariff_id: car?.car_tariff_id,
            contract_status: 'Booked',
        });
    }, [car.id]);

    console.log('data', data);

    return (
        <>
            <Grid container>
                <Grid container spacing={1} style={{ marginTop: 20, marginBottom: 20 }}>
                    <Grid item xs={12} sm={9} lg={4}>
                        <Typography variant="h5">{t('contract_car')}:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9} lg={4}>
                        <Typography variant="h5">{t('contract_start_end_rent_title_day')}:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9} lg={4}>
                        <Typography variant="h5">{t('contract_term')}:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} lg={4}>
                        {car?.car_model_full}
                    </Grid>
                    <Grid item xs={12} sm={9} lg={4}>
                        {new Intl.DateTimeFormat({
                            // @ts-ignore
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        }).format(data?.contract_start_date)}{' - '}
                        {new Intl.DateTimeFormat({
                            // @ts-ignore
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        }).format(data?.contract_end_date)}
                    </Grid>
                    <Grid item xs={12} sm={9} lg={4}>
                        {/* @ts-ignore */}
                        {diffTime + 1}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card >
                        <Divider />
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={8.5} md={8.5}>
                                    <Autocomplete
                                        limitTags={1}
                                        options={clients}
                                        defaultValue={clients?.find((client: any) => client?.id === data?.client_id)}
                                        getOptionLabel={(option: any) => option?.client_fullName} //
                                        onChange={(_event, value: any) => {
                                            setData({
                                                ...data,
                                                contract_client: value?.client_fullName,
                                                client_id: value?.id,
                                                client_uid: value?.client_uid,
                                            });
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                variant="outlined"
                                                label={t('contract_client')}
                                            />
                                        )}
                                    />

                                </Grid>
                                {/* <Grid item xs={2} md={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => setOpenAddNewUser(true)}
                                    >
                                        {t('Add')}
                                    </Button>
                                </Grid> */}
                                {/* <AddNewUserModal
                                    where='modal'
                                    open={openAddNewUser}
                                    onClose={() => setOpenAddNewUser(false)}
                                /> */}
                                {/* <Grid item xs={12} md={12}>
                                    <Autocomplete
                                        limitTags={1}
                                        options={cars}
                                        defaultValue={cars?.find((car: Car) => car?.car_model_full === data?.contract_car)}
                                        getOptionLabel={(option: Car) => option?.car_model_full}
                                        onChange={(_event, value: Car) => {
                                            setData({
                                                ...data,
                                                contract_car: value?.car_model_full,
                                                contract_fuel_start: value?.car_fuel_level,
                                                contract_mileage_start: value?.car_mileage,
                                                contract_car_license_plate: value?.car_license_plate,
                                                contract_car_vin: value?.car_vin,
                                                contract_car_fleet_id: value?.car_fleet_id,
                                                contract_car_type: 'Легковое ТС',
                                                contract_car_sts_series_number: value?.car_russia_sts_series_number,
                                                contract_car_mileage_per_day: value?.car_mileage_per_day,
                                                contract_car_overrun_price: value?.car_overrun_price,
                                                contract_deposit: Number(value?.car_price6),
                                                contract_car_image: value?.car_image ?? '',
                                                contract_start_date: Date.parse(Date()),
                                                contract_end_date: Date.parse(Date()),
                                                contract_start_time: Date.parse(Date()),
                                                contract_end_time: Date.parse(Date()),
                                                car_id: value?.id,
                                                color: value?.car_color,
                                                textColor: value?.car_textColor,
                                                tariff_id: value?.car_tariff_id,
                                                contract_owner_id: value?.car_owner_id,
                                            });
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                variant="outlined"
                                                label={t('contract_car')}
                                            />
                                        )}
                                    />
                                </Grid> */}
                                <Grid item xs={12} md={12}>
                                    <Box pb={1}>
                                        <b>{t('contract_start_end_rent_title_day')}:</b>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                        localeText={{ start: t('contract_start_date'), end: t('contract_end_date') }}
                                    >
                                        <DateRangePicker
                                            inputFormat="DD.MM.YYYY"
                                            value={[
                                                data?.contract_start_date || "",
                                                data?.contract_end_date || "",
                                            ]}
                                            onChange={(newValue) => {
                                                setData({
                                                    ...data,
                                                    contract_start_date: Date.parse(newValue[0]),
                                                    contract_end_date: Date.parse(newValue[1]),
                                                });
                                                daysLeft(data);
                                            }}
                                            renderInput={(startProps, endProps) => (
                                                <React.Fragment>
                                                    <TextField {...startProps} />
                                                    <Box sx={{ mx: 2 }}> {t('contract_to')} </Box>
                                                    <TextField {...endProps} />
                                                </React.Fragment>
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Box pb={1}>
                                        <b>{t('contract_start_end_rent_title_time')}:</b>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}
                                    md={12}
                                    container
                                    display="flex"
                                    alignItems="center">
                                    <Grid item xs={4} md={4}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <TimePicker
                                                ampm={false}
                                                clearable
                                                renderInput={(props) => (
                                                    <TextField fullWidth {...props} helperText="" />
                                                )}
                                                label={t('contract_start_time')}
                                                value={data?.contract_start_time || ""}
                                                onChange={(newValue) => {
                                                    setData({ ...data, contract_start_time: Date.parse(newValue) });
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={2} md={2}>
                                        <Box sx={{ mx: 2 }}> {t('contract_to')} </Box>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <TimePicker
                                                ampm={false}
                                                clearable
                                                renderInput={(props) => (
                                                    <TextField fullWidth {...props} helperText="" />
                                                )}
                                                label={t('contract_end_time')}
                                                value={data?.contract_end_time || ""}
                                                onChange={(newValue) => {
                                                    setData({ ...data, contract_end_time: Date.parse(newValue) });
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Grid item xs={12} md={12}>
                                        <Box pb={1}>
                                            <b>{t('leaseСontract_car_status')}:</b>
                                        </Box>
                                    </Grid>
                                    <RadioGroup
                                        row
                                        // ref={data?.contract_status}
                                        aria-label="ringtone"
                                        name="ringtone"
                                        value={data?.contract_status || ""}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                contract_status: e.target.value,
                                                contract_car_status: e.target.value,
                                            })
                                        }
                                    >
                                        <FormControlLabel
                                            value='Available'
                                            control={
                                                <Radio
                                                    color="success"
                                                    sx={{ color: "success.main" }}
                                                />
                                            }
                                            label={t('Available')}
                                        />
                                        <FormControlLabel
                                            value="Booked"
                                            control={
                                                <Radio
                                                    color="warning"
                                                    sx={{ color: "warning.main" }}
                                                />
                                            }
                                            label={t('Booked')}
                                        />
                                        <FormControlLabel
                                            value="InRent"
                                            control={
                                                <Radio
                                                    color="error"
                                                    sx={{ color: "error.main" }}
                                                />
                                            }
                                            label={t('InRent')}
                                        />
                                        <FormControlLabel
                                            value="Canceled"
                                            control={
                                                <Radio
                                                    color="info"
                                                    sx={{ color: "info.main" }}
                                                />
                                            }
                                            label={t('Canceled')}
                                        />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card >
                        <Divider />
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={12}>
                                    <Box pb={1}>
                                        <b>{t('contract_delivery_return_title')}:</b>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField
                                        value={data?.address_delivery || ""}
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                address_delivery: e.target.value,
                                            });
                                        }}
                                        fullWidth
                                        label={t('contract_profile_delivery_address')}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField
                                        value={data?.address_return || ""}
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                address_return: e.target.value,
                                            });
                                        }}
                                        fullWidth
                                        label={t('contract_profile_return_address')}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Box pb={1}>
                                        <b>{t('leaseСontract_return_comment')}:</b>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField
                                        value={data?.contract_comment || ""}
                                        multiline
                                        rows={6}
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                contract_comment: e.target.value,
                                            });
                                        }}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}


export default CalendarContractMain;
