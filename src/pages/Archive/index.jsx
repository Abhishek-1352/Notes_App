
import { NotePreview } from "../../components/cards/notePreview"

export const Archive = ({state,dispatch}) => {

    return (
        <>
            <div className='flex gap-6 border-solid border-violet-500'>
                {
                    state.notes?.length > 0 && state.notes.map(note => (
                        note.isArchived && !note.isBinned? <NotePreview note={note} dispatch={dispatch} /> : ''
                    ))
                }
            </div>
        </>
    )
}