import React, {
  useState,
  useEffect
} from "react";

// material-ui
import {
  Dialog,
  Box,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useAuth } from 'src/hooks/useAuth';
import { getItems } from "@/utils/db_service";
import Label from 'src/components/Label';





export default function RepairStock({ open, onClose, onSelect }) {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();
  const urlpage1 = window.location.origin;
  const urlForDB = urlpage1 + '/warehouse/items';
  const [items, setItems] = useState<any | null>(null);
  useEffect(() => {
    if (user?.company_id) {
      getItems(user?.company_id).then(setItems);
    }
  }, [user]);


  const getItemAvailability = (carStatus: string, t1: string, t2: string): JSX.Element => {
    const map = {
      InStock: {
        text: t1,
        color: 'success'
      },
      NotAvailable: {
        text: t2,
        color: 'error'
      },
    };
    const { text, color }: any = map[carStatus];
    return <Label color={color}>{text}</Label>;
  };

  return (
    <>
      <Dialog
        maxWidth={'xl'}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ p: 3 }}
      >
        <Grid container alignItems="center" justifyContent="space-between" >
          <Typography variant="h3" style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>{t('maintenance_spare_parts_title')}</Typography>
          <Grid textAlign="right" style={{ marginTop: 20 }}>
            <Button
              onClick={() => { window.open(`${urlForDB}`,); }}
              variant="contained"
              color="primary" >
              {t('Add')}
            </Button>
            <Button onClick={onClose} variant="contained" color="error" style={{ marginLeft: 20, marginRight: 20, }}>{t('Back')}</Button>
          </Grid>
        </Grid>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={5}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              sx={{ pt: { xs: 2, sm: "0 !important" } }}
            >
              <Grid>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ pl: 3 }}>{t('maintenance_spare_parts_title')}</TableCell>
                        <TableCell>{t('maintenance_price_title')}</TableCell>
                        <TableCell>{t('item_availability')}</TableCell>
                        <TableCell>{t('maintenance_comment')}</TableCell>
                        <TableCell>{t('item_count')}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items &&
                        items.map((row, index) => {
                          return (
                            <TableRow
                              hover
                              key={index}
                              onClick={() => {
                                onClose();
                                onSelect(row);
                              }}
                            >
                              <TableCell>{row.item_name}</TableCell>
                              <TableCell>{row.item_price}</TableCell>
                              <TableCell>{getItemAvailability(row?.item_availability, t('InStock'), t('NotAvailable'))}</TableCell>
                              <TableCell>{row.item_comment}</TableCell>
                              <TableCell><Typography>{row?.item_count}</Typography></TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
}
