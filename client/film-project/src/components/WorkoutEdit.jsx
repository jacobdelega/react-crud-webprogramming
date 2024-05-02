import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function WorkoutEdit({ workout }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditSubmit = async (formJson) => {
        try {
            const response = await fetch(`http://localhost:3000/api/update-workout/${workout._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formJson),
            });
        } catch (error) {
            console.error("Error updating workout:", error);
        }
    };

    return (
        <React.Fragment>
            <Button variant='outlined' onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        console.log(formJson);
                        const name = formJson.name;
                        const sets = formJson.sets;
                        const reps = formJson.reps;
                        const weight = formJson.weight;
                        const id = formJson.id;
                        const data = { name, sets, reps, weight };
                        handleEditSubmit(formJson);
                        handleClose();
                    },
                }}>
                <DialogTitle>Edit Workout</DialogTitle>
                <DialogContent>
                    <DialogContentText>Edit an individual workout</DialogContentText>
                    <TextField autoFocus required margin='dense' id='name' name='name' label='Workout Name' type='name' defaultValue={workout.name} fullWidth variant='standard' />
                    <TextField autoFocus required margin='dense' id='sets' name='sets' label='Sets' type='sets' defaultValue={workout.sets} fullWidth variant='standard' />
                    <TextField autoFocus required margin='dense' id='reps' name='reps' label='Reps' type='reps' defaultValue={workout.reps} fullWidth variant='standard' />
                    <TextField autoFocus required margin='dense' id='weight' name='weight' label='Weight' type='weight' defaultValue={workout.weight} fullWidth variant='standard' />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit'>Submit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
