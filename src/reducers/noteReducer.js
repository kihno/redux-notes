import { createSlice } from "@reduxjs/toolkit"

const generateId = () => {
  Number((Math.random() * 1000000).toFixed(0))
}

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    setNotes(state, action) {
      return action.payload
    },
    createNote(state, action) {
      const content = action.payload
      state.push({
        content,
        important: false,
        id: generateId(),
      })
    },
    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      console.log(JSON.parse(JSON.stringify(state)))
      return state.map(note =>
        note.id !== id ? note : changedNote
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
