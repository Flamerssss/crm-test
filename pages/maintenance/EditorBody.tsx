import React, { useState, useEffect } from "react";
import {
    Grid,
    TextField,
    Card,
    CardHeader,
    Box,
    CardContent,
    Autocomplete,
    Divider,
    MenuItem,
} from "@mui/material";
import "firebase/compat/storage";
import { useTranslation } from 'react-i18next';
import type Car from '@/models/cars';
import { useAuth } from 'src/hooks/useAuth';
import RepairStock from '@/utils/RepairSklad';
import { getWhere } from "@/utils/db_service";
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import RepairPart from './ReairPart';
import moment from "moment";





function MaintenanceEditor({ data, setData, allCars, providers, getSelectedRepairs }) {
    const { t }: { t: any } = useTranslation();
    const [setSelectedRepair] = useState({});
    const [selectedRepairs, setSelectedRepairs] = useState(data?.selectedRepairs || []);
    const [repairSkladDialogOpen, setRepairSkladDialogOpen] = useState(false);
    const [carDamage, setCarDamage] = useState<any | null>([]);
    const { user } = useAuth();
    // const localeMap = {
    //     ru: ruLocale,
    // };
    useEffect(() => {
        if (data?.selectedRepairs) {
            setSelectedRepairs(data?.selectedRepairs);
        }
    }, [data?.selectedRepairs]);

    useEffect(() => {
        if (data?.maintenance_car_id) {
            getWhere('carsDamages', user?.company_id, 'damage_car_id', data?.maintenance_car_id).then(setCarDamage);
        }
    }, [data?.maintenance_car_id]);

    useEffect(() => {
        console.log('WORK')
        setData({
            ...data,
            maintenance_repairs_price: Number(selectedRepairs.reduce((acc, repairPrice) => {
                return acc + (Number(repairPrice?.item_price) * Number(repairPrice?.item_count));
            }, 0)),
            maintenance_repairs_count: Number(selectedRepairs.reduce((acc, repairPrice) => {
                return acc + Number(repairPrice?.item_count);
            }, 0)),
            maintenance_total_price: Number(data?.maintenance_repairs_price) + Number(data?.maintenance_job_price),
        });
    }, [selectedRepairs, data?.maintenance_repairs_price]);


    const jobtype = [
        {
            label: t('Repair'),
            value: "repair",
        },
        {
            label: t('Maintenance'),
            value: "maintenance",
        },
        {
            label: t('CarAccident'),
            value: "car_accident",
        },
    ];

    const statusTO = [
        {
            label: t('Waiting'),
            value: "waiting",
        },
        {
            label: t('Paid'),
            value: "paid",
        },
        {
            label: t('InWork'),
            value: "in_work",
        },
        {
            label: t('Done'),
            value: "done",
        },
    ];

    return (
        <Grid container spacing={3} style={{ marginTop: 20 }}>
            <RepairStock
                //@ts-ignore
                onSelect={(dataRepair) => setSelectedRepair({ ...dataRepair })}
                open={repairSkladDialogOpen}
                onClose={() => setRepairSkladDialogOpen(false)}
            />
            <Grid item xs={12} lg={6}>
                <Card >
                    <CardHeader title={t('maintenance_description_title')} />
                    <Divider />
                    <CardContent>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={8}>
                                {allCars && <Autocomplete
                                    sx={{
                                        m: 0
                                    }}
                                    limitTags={1}
                                    options={allCars}
                                    defaultValue={allCars?.find((car: Car) => car?.id === data?.maintenance_car_id)}
                                    getOptionLabel={(option: Car) => `${option?.car_model_full} / ${option?.car_license_plate}`}
                                    onChange={(_event, value: Car) => {
                                        setData({
                                            ...data,
                                            maintenance_car_id: value?.id,
                                            maintenance_mileage: value?.car_mileage,
                                        });
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            variant="outlined"
                                            placeholder={t('maintenance_car')}
                                        />
                                    )}
                                />}
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} md={4}>
                                        <Box pb={1}>
                                            <b>{t('maintenance_mileage')}</b>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                        <TextField
                                            value={data?.maintenance_mileage || 0}
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    maintenance_mileage: e.target.value,
                                                });
                                            }}
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} md={12}>
                                        <Box pb={1}>
                                            <b>{t('maintenance_date_title')}:</b>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                            localeText={{ start: t('maintenance_date_start'), end: t('maintenance_date_end') }}
                                        >
                                            <DateRangePicker
                                                inputFormat="DD.MM.YYYY"
                                                value={[
                                                    data?.maintenance_data_start || "",
                                                    data?.maintenance_data_end || "",
                                                ]}
                                                onChange={(newValue) => {
                                                    const timestampSTART = new Date(Date.parse(newValue[0])).getTime();
                                                    const timestampEND = new Date(Date.parse(newValue[1])).getTime();
                                                    const startDate = moment(timestampSTART);
                                                    const timeEnd = moment(timestampEND);
                                                    const diff = timeEnd.diff(startDate, "days");
                                                    //@ts-ignore
                                                    setData({
                                                        ...data,
                                                        maintenance_term: Number(diff),
                                                        maintenance_data_start: Date.parse(newValue[0]),
                                                        maintenance_data_end: Date.parse(newValue[1]),
                                                    })
                                                    // setData({
                                                    //     ...data,
                                                    //     maintenance_data_start: Date.parse(newValue[0]),
                                                    //     maintenance_data_end: Date.parse(newValue[1]),
                                                    // });
                                                    // daysLeft(data, newValue[0], newValue[1]);
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
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} md={12}>
                                        <Box pb={1}>
                                            <b>{t('maintenance_job_type')}:</b>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            select
                                            fullWidth
                                            label={t('Select')}
                                            value={data?.maintenance_job_type || ""}
                                            onChange={(e) => {
                                                setData({ ...data, maintenance_job_type: e.target.value });
                                            }}
                                            variant="outlined"
                                        >
                                            {jobtype.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {providers && <Autocomplete
                                    sx={{
                                        m: 0
                                    }}
                                    limitTags={1}
                                    options={providers}
                                    defaultValue={providers?.find((provider: Car) => provider?.id === data?.maintenance_provider_id)}
                                    getOptionLabel={(option: Car) => option?.providers_name}
                                    onChange={(_event, value: Car) => {
                                        setData({
                                            ...data,
                                            maintenance_provider_id: value?.id,
                                        });
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            variant="outlined"
                                            placeholder={t('maintenance_provider')}
                                        />
                                    )}
                                />}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    select
                                    fullWidth
                                    label={t('maintenance_status')}
                                    value={data?.maintenance_status || ""}
                                    onChange={(e) => {
                                        setData({ ...data, maintenance_status: e.target.value });
                                    }}
                                    variant="outlined"
                                >
                                    {statusTO.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    select
                                    fullWidth
                                    label={t('maintenance_damage_type')}
                                    value={data?.maintenance_damage_type || ""}
                                    onChange={(e) => {
                                        const idx = carDamage.findIndex(
                                            (el) => el.damage_type === e.target.value
                                        );
                                        if (idx === -1) return;

                                        setData({
                                            ...data,
                                            maintenance_damage_type: e.target.value,
                                            maintenance_damage_areaId: carDamage[idx].damage_area_id,
                                            maintenance_damage_part_id: carDamage[idx].id,
                                        });
                                    }}
                                    variant="outlined"
                                >
                                    {carDamage?.map((option) => (
                                        <MenuItem key={option.damage_type} value={option.damage_type}>
                                            {option.damage_type}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <Box pb={1}>
                                            <b>{t('maintenance_term')}</b>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            value={data?.maintenance_term || 0}
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    maintenance_term: Number(e.target.value),
                                                });
                                            }}
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* <Grid item xs={12} md={7} style={{ marginTop: 15 }}>
                                <CarShemaKuzov
                                    damages={carDamage?.filter((damage) => {
                                        return damage.damage_where === 'kuzov';
                                    })}
                                    getPngFunction={() => { }}
                                    onPathClick={() => { }}
                                />
                            </Grid> */}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card >
                    <CardHeader title={t('maintenance_description_title')} />
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <Grid container spacing={2} alignItems="center">
                                    {selectedRepairs.map((el, index) => (
                                        <RepairPart
                                            key={index}
                                            selectedRepair={el}
                                            setRepairPart={(part) => {
                                                console.log("part", part);
                                                selectedRepairs[index] = part;
                                                setSelectedRepairs([...selectedRepairs]);
                                                getSelectedRepairs([...selectedRepairs])
                                            }}
                                            setData={setData}
                                            onDelete={() => {
                                                const arr = [].concat(selectedRepairs);
                                                arr.splice(index, 1);
                                                setSelectedRepairs(arr);
                                                getSelectedRepairs(arr);
                                            }}
                                            data={data}
                                        />
                                    ))}
                                    {/* @ts-ignore */}
                                    <RepairPart
                                        setRepairPart={(part) => {
                                            const arr = [].concat(selectedRepairs);
                                            arr.push({ ...part, item_count: 1 });
                                            setSelectedRepairs(arr);
                                        }}
                                        setData={setData}
                                        data={data}
                                    />
                                    <Grid item xs={12} md={6}>
                                        <Box pb={1}>
                                            <b>{t('maintenance_job_description')}</b> :
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            multiline
                                            rows={5}
                                            value={data?.maintenance_job_description || ""}
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    maintenance_job_description: e.target.value,
                                                });
                                            }}
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box pb={1}>
                                            <b>{t('maintenance_result_diagnistic')}</b> :
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            multiline
                                            rows={5}
                                            value={data?.maintenance_result_diagnistic || ""}
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    maintenance_result_diagnistic: e.target.value,
                                                });
                                            }}
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box pb={1}>
                                            <b>{t('maintenance_repairs_price')}</b> :
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            value={selectedRepairs.reduce((acc, repairPrice) => {
                                                console.log('acc', acc)
                                                console.log('repairPrice', repairPrice.item_price)
                                                return acc + (Number(repairPrice.item_price) * Number(repairPrice.item_count));
                                            }, 0)}
                                            // onChange={(_e) => {
                                            //     setData({
                                            //         ...data,
                                            //         maintenance_repairs_price: Number(selectedRepairs.reduce((acc, repairPrice) => {
                                            //             return acc + (Number(repairPrice?.item_price) * Number(repairPrice?.item_count));
                                            //         }, 0)),
                                            //         maintenance_repairs_count: Number(selectedRepairs.reduce((acc, repairPrice) => {
                                            //             return acc + Number(repairPrice?.item_count);
                                            //         }, 0)),
                                            //     });
                                            // }}
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box pb={1}>
                                            <b>{t('maintenance_job_price')}</b> :
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            value={data?.maintenance_job_price || 0}
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    maintenance_job_price: Number(e.target.value),
                                                    maintenance_total_price: Number(data?.maintenance_repairs_price) + Number(e.target.value),
                                                });
                                            }}
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box pb={1}>
                                            <b>{t('maintenance_total_price')}</b> :
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            value={data?.maintenance_total_price || ""}
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    maintenance_total_price: e.target.value,
                                                });
                                            }}
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default MaintenanceEditor;
