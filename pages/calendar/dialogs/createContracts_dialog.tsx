import React, { useEffect, useState, ChangeEvent } from "react";

// material-ui
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    DialogTitle,
    // TextField,
    Zoom,
    // Box,
    styled,
    Tabs,
    Tab
} from "@mui/material";
import contractsStore from '../../../src/store/contracts_store';

// project imports
import {
    getStaff, getTariffs, getOwners, getWhere,
} from "@/utils/db_service";
// import firebase from "firebase/compat/app";
// import { useSnackbar } from 'notistack';
// import ContractMainEditor from 'pages/contracts/create/ContractMainEditor';
import { getContracts } from "@/utils/db_service";
import moment from "moment";
import "firebase/compat/firestore";
import { useTranslation } from 'react-i18next';
import { useAuth } from 'src/hooks/useAuth';
import CalendarContractMain from './create_main';
import { Contract } from '@/models/contracts';
// import AdditionalServices from 'pages/contracts/tabs/AdditionalServices';
// import DocumentsEditor from 'pages/contracts/tabs/DocumentsEditor';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useSnackbar } from 'notistack';

const TabsWrapper = styled(Tabs)(
    () => `
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }
  `
);

//= ==============================|| UI DIALOG - SIZE VARIANTS ||===============================//

function CreateContractInCalendar({ initialCalendarData, open, onClose }) {
    const endTime = new Date(initialCalendarData?.EndTime);
    endTime.setHours(endTime.getHours() - 1);
    const { t }: { t: any } = useTranslation();
    const [lastContractNumber, setLastContractNumber] = useState("1001");
    const { enqueueSnackbar } = useSnackbar();
    const { user } = useAuth();

    const [carPrepared, setCar] = useState<any | null>(null);
    const [staff, setStaff] = useState<any | null>(null);
    const [tariffs, setTariffs] = useState<any | null>(null);
    const [owners, setOwners] = useState<any | null>(null);
    useEffect(() => {
        if (user?.company_id) {
            if (initialCalendarData?.car_id) getWhere('cars', user?.company_id, 'id', initialCalendarData?.car_id).then(setCar);
            getStaff(user?.company_id).then(setStaff);
            getTariffs(user?.company_id).then(setTariffs);
            getOwners(user?.company_id).then(setOwners);
        }
    }, [user, initialCalendarData]);

    const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
        setCurrentTab(value);
    };
    const [currentTab, setCurrentTab] = useState<string>('info');
    const tabs = [
        { value: 'info', label: t('info') },
        { value: 'contract_additional_service', label: t('contract_additional_service') },
        { value: 'contract_additional_service2', label: t('contract_additional_service') },
    ];

    const [allContracts, setAllContracts] = useState<any | null>(null);

    useEffect(() => {
        if (user?.company_id) {
            getContracts(user?.company_id).then(setAllContracts);
        }
    }, [user]);


    const [data, setData] = useState<Contract | null>(null);


    const onContractsLoaded = (contracts) => {
        if (contracts && contracts?.length) {
            let lastNumber = 0;
            contracts.map((contract) => {
                if (!contract || !contract?.contract_number) {
                    return null;
                }
                const nextNumber = +contract?.contract_number.substr(0, contract?.contract_number.indexOf("/"));
                if (nextNumber > lastNumber) {
                    lastNumber = nextNumber;
                }
            });
            //@ts-ignore
            lastNumber = "" + (lastNumber + 1);
            //@ts-ignore
            while (lastNumber.length < 4) {
                //@ts-ignore
                lastNumber = "0" + lastNumber;
            }
            //@ts-ignore
            setLastContractNumber(lastNumber);
        }
    };

    useEffect(() => {
        if (allContracts) {
            onContractsLoaded(allContracts)
        }
    }, [allContracts]);

    useEffect(() => {
        const currentDate = new Date();
        setData({
            ...data,
            contract_number: `${lastContractNumber || "0001"}/${moment(currentDate).format("DD-MM-YYYY")}`
        })
    }, [lastContractNumber]);

    const obj = Object.assign({}, carPrepared);
    const car = { ...obj[0] };
    console.log('owners', owners)

    async function onSave() {

        if (!data?.id) {
            const documentRef = await firebase
                .firestore()
                .collection("contracts")
                .add(data);

            const dataWithId = {
                ...data,
                id: documentRef.id,
                created_at: new Date(),
                company_id: user?.company_id,
            };

            await documentRef.set(dataWithId);

            setData({
                ...data,
                id: documentRef.id,
            })

        } else {
            await firebase
                .firestore()
                .collection("contracts")
                .doc(data?.id)
                .update({
                    ...data,
                    // contract_start_date: Date.parse(data?.contract_start_date),
                    // contract_end_date: Date.parse(data?.contract_end_date),
                    created_at: new Date(),
                    company_id: user?.company_id,
                });
        }


        await contractsStore.fetchContracts();
        await enqueueSnackbar(t('Saved'), {
            variant: 'success',
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            TransitionComponent: Zoom
        });
    };

    return (
        <Dialog
            fullWidth={true}
            maxWidth={"md"}
            open={open}
            onClose={onClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle id="max-width-dialog-title">
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button
                        onClick={() => {
                            onSave()
                        }}
                        variant="contained"
                        color="primary"
                    >
                        {t('Save')}
                    </Button>
                    <Button onClick={onClose} variant="contained" color="error">
                        {t('Back')}
                    </Button>
                </DialogActions>
            </DialogTitle>
            <DialogContent>
                <Grid item xs={12}>
                    <TabsWrapper
                        onChange={handleTabsChange}
                        value={currentTab}
                        variant="scrollable"
                        scrollButtons="auto"
                        textColor="primary"
                        indicatorColor="primary"
                    >
                        {tabs.map((tab) => (
                            <Tab key={tab.value} label={tab.label} value={tab.value} />
                        ))}
                    </TabsWrapper>
                </Grid>
                <Grid item xs={12}>
                    {currentTab === 'info' && <CalendarContractMain
                        data={data}
                        car={car}
                        staffs={staff}
                        tariffs={tariffs}
                        setData={(dataDoc) => {
                            setData(dataDoc);
                        }}
                        startDataTime={initialCalendarData?.StartTime}
                        endDataTime={endTime}
                        car_id={initialCalendarData?.car_id}
                    />
                    }
                    {/* {currentTab === 'contract_additional_service' && <AdditionalServices
                        data={data}
                        setData={(dataDoc) => {
                            setData(dataDoc);
                        }}
                    />}
                    {car && owners && currentTab === 'contract_additional_service2' && <DocumentsEditor
                        contract={data}
                        setContract={setData}
                        car={[car]}
                        owner={[owners?.filter((ownitem) => {
                            return ownitem?.id === data?.contract_owner_id;
                        })]}
                    />} */}
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

export default CreateContractInCalendar;
