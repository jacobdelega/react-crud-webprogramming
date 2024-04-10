import React from 'react'
import Navbar from '../../components/Navbar/index'
import Hero from '../../components/Hero/Hero'
import Workout from '../../components/Workouts/Workouts'
export default function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Workout />
    </div>
  )
}
