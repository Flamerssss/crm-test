import React, { useState } from "react";
import {
    Grid,
    TextField,
    Button,

    Box,
} from "@mui/material";
import "firebase/compat/storage";
import { useTranslation } from 'react-i18next';
import RepairStock from '@/utils/RepairSklad';

function RepairPart({ selectedRepair, setRepairPart, setData, onDelete, data }) {
    const [open, setOpen] = useState(false);
    const { t }: { t: any } = useTranslation();


    return (
        <Grid container spacing={1} style={{ marginTop: 15, marginLeft: 15 }}>
            <RepairStock
                onSelect={(part) => setRepairPart(part)}
                open={open}
                onClose={() => setOpen(false)}
            />
            <Grid item xs={12} md={5}>
                <Box pb={1}>
                    <b>{t('maintenance_spare_part_title')}</b>
                </Box>
                <Grid item xs={12} md={12}>
                    <TextField
                        value={selectedRepair?.item_name}
                        onClick={() => setOpen(true)}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={2.5}>
                <Box pb={1}>
                    <b>{t('maintenance_price_title')}</b>
                </Box>
                <TextField
                    value={selectedRepair?.item_price || ""}
                    onChange={(e) =>
                        setRepairPart({
                            ...selectedRepair,
                            item_price: e.target.value,
                        })
                    }
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={10} sm={2}>
                <Box pb={1}>
                    <b>{t('maintenance_count_title')}</b>
                </Box>
                <TextField
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={selectedRepair?.item_count}
                    onChange={(e) => {
                        if (!selectedRepair || !selectedRepair.item_price) return;
                        const value: number = Number(e.target.value);
                        if (!value || value < 0) return;
                        setRepairPart({
                            ...selectedRepair,
                            item_count: e.target.value,
                        })
                        setData({
                            ...data,
                            item_count: e.target.value,
                            // item_price: Number(selectedRepair.item_price) * Number(value),
                        });
                        console.log('data', data)
                    }}
                    variant="outlined"
                    defaultValue="1"
                />
            </Grid>
            <Grid item xs={1} md={1} style={{ marginTop: 34 }}>
                <div hidden={!onDelete}>
                    <Button onClick={onDelete} variant="contained" color="error">
                        {t('Delete')}
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
}

export default RepairPart;