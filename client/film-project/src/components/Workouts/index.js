import React from "react";
import { animated } from "react-spring";

const index = () => {
    return (
        <div className='pt-16 flex justify-center'>
            <div className='bg-slate-50 h-[500px] w-2/3 border shadow-lg rounded-lg'>
                {/* <div className='sm:flex-col flex gap-32'>

                  <div className='mt-16 ml-16 w-1/2 justify-center align-middle text-center'>
                    <h1 className='text-2xl font-bold p-4'>Description</h1>
                    <p className='text-l text-justify'>With this application you can track all your workouts, and see if all the work you are putting in is actually working! This can open your mind to possible imperfections you can work on to maximize total growth.</p>
                  </div>

                  <div className='mt-16 mr-16 w-1/2 justify-center align-middle text-center border-red-600 border'>
                    <h1 className='text-2xl font-bold p-4'>Form Entry</h1>
                    
                  </div>
                </div> */}
                <div className='flex h-full' name='form__container'>
                    <div name='left__container' className='w-1/2 h-full'>
                        <h1 name='left_header' className='text-center text-2xl font-bold p-4 w-full'>
                            Description
                        </h1>
                        <div name='left__content' className='w-full flex justify-center align-middle text-center'>
                            <p className='text-l text-center w-5/6'>
                                Ut ad incididunt duis dolor aliqua exercitation dolore proident ex ut dolor. Mollit laboris reprehenderit labore excepteur deserunt id consequat amet in incididunt ex. Laboris pariatur laborum id mollit. Sit tempor
                                excepteur laborum proident ut est incididunt eiusmod dolor consectetur aliqua adipisicing amet exercitation.
                            </p>
                        </div>
                    </div>

                    <div name='right__container' className='w-1/2 h-full'>
                        <h1 name='right_header' className='text-center text-2xl font-bold p-4 w-full'>
                            Form Entry
                        </h1>

                        <div name='right__content' className='w-full flex justify-center align-middle text-center'>
                            <form>
                                <button className='border-2 border-blue-700 rounded-md text-lg hover:text-white hover:bg-slate-400 w-[125px] h-[50px]'>Add exercise</button>
                                <div className='grid-cols-2 gap-4 mt-4'>
                                    <label className='flex align-middle items-center text-lg font-normal'>Exercise Name:</label>
                                    <input className='border-2 border-blue-700 rounded-md text-lg w-[200px] h-[30px]'></input>

                                    <label className='flex align-middle items-center text-lg font-normal'>weight:</label>
                                    <input className='border-2 border-blue-700 rounded-md text-lg w-[200px] h-[30px]'></input>
                                    <label className='flex align-middle items-center text-lg font-normal'>sets:</label>
                                    <input className='border-2 border-blue-700 rounded-md text-lg w-[200px] h-[30px]'></input>
                                    <label className='flex align-middle items-center text-lg font-normal'>reps:</label>
                                    <input className='border-2 border-blue-700 rounded-md text-lg w-[200px] h-[30px]'></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
