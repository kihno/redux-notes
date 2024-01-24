import { createSlice } from "@reduxjs/toolkit"

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    setNotes(state, action) {
      return action.payload
    },
    createNote(state, action) {
      state.push(action.payload)
    },
    toggleImportanceOf(state, action) {
      return state.map(note =>
        note.id !== action.payload.id ? note : action.payload
      )
    },
    appendNote(state, action) {
      state.push(action.payload)
    }
  }
})

// const noteReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case 'NEW_NOTE':
//       return [...state, action.payload]
//     case 'TOGGLE_IMPORTANCE': {
//       const id = action.payload.id
//       const noteToChange = state.find(n => n.id === id)
//       const changedNote = {
//         ...noteToChange,
//         important: !noteToChange.important
//       }
//       return state.map(note =>
//         note.id !== id ? note : changedNote  
//       )
//     }
//     default:
//       return state
//   }
// }

// const createNote = (content) => {
//   return {
//     type: 'NEW_NOTE',
//     payload: {
//       content,
//       important: false,
//       id: generateId()
//     }
//   }
// }

// const toggleImportanceOf = (id) => {
//   return {
//     type: 'TOGGLE_IMPORTANCE',
//     payload: { id }
//   }
// }

export const { setNotes, createNote, toggleImportanceOf, appendNote } = noteSlice.actions

export default noteSlice.reducer
