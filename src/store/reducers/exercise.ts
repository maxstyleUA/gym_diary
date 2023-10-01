import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

// Define a type for the slice state
type ExerciseState = {
  exercises: string[]
}

// Define the initial state using that type
const initialState: ExerciseState = {
  exercises: [],
}

export const exercisesSlice = createSlice({
  name: 'exercises',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addExercise: (state, action: PayloadAction<string[]>) => {
      state.exercises.push(...action.payload)
    },
  },
})

export const { addExercise } = exercisesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.exercise.exercises

export default exercisesSlice.reducer
