
import { NotePreview } from "../../components/cards/notePreview"

export const Important = ({state,dispatch}) => {

    return (
        <>
            <div className='flex gap-6 border-solid border-violet-500'>
                {
                    state.notes?.length > 0 && state.notes.map(note => (
                        note.isImportant && !note.isBinned? <NotePreview note={note} dispatch={dispatch} /> : ''
                    ))
                }
            </div>
        </>
    )
}