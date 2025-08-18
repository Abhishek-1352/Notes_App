
export const NoteReducer = (state, action) => {
    switch (action.type) {
        case 'TEXT': return {
            ...state,
            text: action.payload
        }
        case 'TITLE': return {
            ...state,
            title: action.payload
        }
        case 'CLEAN': return {
            ...state,
            text: '',
            title: ''
        }
        case 'ADD': return {
            ...state,
            notes: [...state.notes, { id: action.payload, title: state.title, text: state.text, isPinned: false,isImportant:false, isArchived: false, isBinned: false }]
        }
        case 'PINNED':
            const updatedNotesPin = state.notes.map(note =>
                note.id === action.payload
                    ? { ...note, isPinned: !note.isPinned }
                    : note
            );
            return {
                ...state,
                notes: updatedNotesPin
            }
        case 'ARCHIVE':
            const updatedNotesArchive = state.notes.map(note =>
                note.id === action.payload
                    ? { ...note, isArchived: !note.isArchived }
                    : note
            );
            return {
                ...state,
                notes: updatedNotesArchive
            }
        case 'IMPORTANT': 
            const updatedNotesImportant = state.notes.map(note =>
                note.id === action.payload
                    ? { ...note, isImportant: !note.isImportant }
                    : note
            );
            return {
                ...state,
                notes: updatedNotesImportant
            }
        case 'BIN': const updatedNotesBin = state.notes.map(note =>
                note.id === action.payload
                    ? { ...note, isBinned: !note.isBinned }
                    : note
            );
            return {
                ...state,
                notes: updatedNotesBin
            }
        default:
            return state;
    }
}
