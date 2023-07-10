import React, {
  useState,
} from "react";

// material-ui
import {
  Button,
  Dialog,
  Box,
  Typography,
  IconButton,
  styled,
  Avatar,
  Zoom,
} from "@mui/material";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { observer } from "mobx-react-lite";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const AvatarError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(12)};
      height: ${theme.spacing(12)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);

const ButtonError = styled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);



// ===============================|| UI DIALOG - SWEET ALERT ||=============================== //

export function DeleteDialog({ collection, document }) {

  // function DeleteDialog({ delFunc }) {
  const { t }: { t: any } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDelete = () => {

    try {
      const documentRef = firebase
        .firestore()
        .collection(collection)
        .doc(document);
      documentRef.delete();


      enqueueSnackbar(t('Deleted'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });
    } catch (err) {
      enqueueSnackbar(err, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });
    }

    handleClose();
  };
  // const onDelete = async () => {

  //   try {
  //     await delFunc()
  //     enqueueSnackbar(t('Deleted'), {
  //       variant: 'success',
  //       anchorOrigin: {
  //         vertical: 'top',
  //         horizontal: 'right'
  //       },
  //       TransitionComponent: Zoom
  //     });
  //   } catch (err) {
  //     enqueueSnackbar(err, {
  //       variant: 'error',
  //       anchorOrigin: {
  //         vertical: 'top',
  //         horizontal: 'right'
  //       },
  //       TransitionComponent: Zoom
  //     });
  //   }

  //   handleClose();
  // };

  return (
    <>
      <IconButton
        onClick={handleClickOpen}
        color="error"
      >
        <DeleteTwoToneIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ p: 3 }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={5}
        >
          <AvatarError>
            <CloseIcon />
          </AvatarError>

          <Typography
            align="center"
            sx={{
              py: 4,
              px: 6
            }}
            variant="h3"
          >
            {t('ConfirmDelete_title')}
            {t('ConfirmDelete_body')}
          </Typography>

          <Box>
            <Button
              variant="text"
              size="large"
              sx={{
                mx: 1
              }}
              onClick={handleClose}
            >
              {t('Back')}
            </Button>
            <ButtonError
              onClick={onDelete}
              size="large"
              sx={{
                mx: 1,
                px: 3
              }}
              variant="contained"
            >
              {t('Delete')}
            </ButtonError>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default observer(DeleteDialog);