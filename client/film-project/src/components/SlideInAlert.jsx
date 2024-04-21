import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

export default function SlideInAlert({ workout, workouts }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (e) => {
        try {
            const response = fetch(`http://localhost:3000/api/delete-workout/${workout._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            handleClose(); // close it 
        } catch (err) {
            console.error("Error deleting workout:", err);
        }
    };

    return (
        <React.Fragment>
            <Button variant='outlined' onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby='alert-dialog-slide-description'>
                <DialogTitle>{"Deleting workout..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-slide-description'>Are you positive that you want to delete this?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
