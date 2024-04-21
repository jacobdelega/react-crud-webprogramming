import React, { useEffect, useState } from "react";
import { animated } from "react-spring";

// I need to import the compnent WorkoutEdit
import WorkoutEdit from "../WorkoutEdit";
import SlideInAlert from "../SlideInAlert";

// MUI Components
import TextField from "@mui/material/TextField";




const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);


    // This is the state for the form entry
    const [workoutName, setWorkoutName] = useState("");
    const [workoutWeight, setWorkoutWeight] = useState();
    const [workoutSets, setWorkoutSets] = useState();
    const [workoutReps, setWorkoutReps] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/api/workouts")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data); // Log the fetched data
                setWorkouts(data);
            })
            .catch((error) => console.error("Error fetching workouts:", error)); // Log errors
    }, []);

    const handleSubmit = async (e) => {
        // Prevent the default form submission
        e.preventDefault();
        const data = {
            name: workoutName,
            weight: workoutWeight,
            sets: workoutSets,
            reps: workoutReps,
        };
        console.log(data)

        try {
            const response = await fetch("http://localhost:3000/api/add-workout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const updatedWorkouts = await response.json();
            setWorkouts([...workouts, updatedWorkouts]); // This will add the new workout to the list of workouts
        } catch (error) {
            console.error("Error adding workout:", error);
        }
    };

    return (
        <>
            <div className='pt-16 flex justify-center max-h-screen'>
                <div className='bg-slate-50 w-2/3 border shadow-lg rounded-lg'>
                    <div className='flex' name='form__container'>
                        <div name='left__container' className='w-1/2 h-full'>
                            <h1 name='left_header' className='text-center text-2xl font-bold p-4 w-full'>
                                Description
                            </h1>
                            <div name='left__content' className='w-full flex justify-center align-middle text-center border-b'>
                                <p className='text-l text-center w-5/6 '>
                                    Essentially this application allows you to keep track of each individual workout. You can add a new workout, edit an existing workout, and delete a workout. End goals are to be able to track your progress and see
                                    how you are improving over time.
                                </p>
                            </div>

                            <div>
                                {/* Lets list out each workouts */}
                                <h1 className='text-xl font-bold text-center pb-8 pt-4'> All workouts</h1>
                                {workouts.map((workout) => (
                                    <div className='flex pt-4 gap-2 items-center pb-1' key={workout.id}>
                                        <h2 className='pl-4'>{workout.name}</h2>
                                        <p className='ml-4'>Sets: {workout.sets}</p>
                                        <p>Reps: {workout.reps}</p>
                                        <p>{workout.weight}lbs</p>
                                        <div className='flex'>
                                            <WorkoutEdit className='' workout={workout} />
                                        </div>
                                        <div className='flex'>
                                            {/* This is the delete button  */}
                                            <SlideInAlert workout={workout} workouts={workouts} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div name='right__container' className='w-1/2 h-full'>
                            <h1 name='right_header' className='text-center text-2xl font-bold p-4 w-full'>
                                Form Entry
                            </h1>

                            <div name='right__content' className='w-full flex justify-center align-middle text-center'>
                                <form onSubmit={handleSubmit}>
                                    <button className='border border-blue-500 rounded-md text-lg text-slate-500 hover:text-white hover:bg-slate-400 w-[125px] h-[50px]'>Add exercise</button>
                                    <div className='flex flex-col gap-4 mt-4'>
                                        <TextField id="outlined-basic" label="Workout name" onChange={(e) => setWorkoutName(e.target.value)} />
                                        <TextField id="outlined-basic" label="Weight" onChange={(e) => setWorkoutWeight(e.target.value)} />
                                        <TextField id="outlined-basic" label="Sets" onChange={(e) => setWorkoutSets(e.target.value)} />
                                        <TextField id="outlined-basic" label="Reps" onChange={(e) => setWorkoutReps(e.target.value)} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[500px]'></div>
        </>
    );
};

export default Workouts;
