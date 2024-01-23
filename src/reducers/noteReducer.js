const generateId = () => {
  Number((Math.random() * 1000000).toFixed(0))
}

const initialState = [
  {
    content: 'the app state is in redux store',
    important: true,
    id: generateId()
  },
  {
    content: 'state changes are made with actions',
    important: false,
    id: generateId()
  }
]

const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload]
    case 'TOGGLE_IMPORTANCE': {
      const id = action.payload.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map(note =>
        note.id !== id ? note : changedNote  
      )
    }
    default:
      return state
  }
}

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id }
  }
}

export default noteReducer
