
import { NotePreview } from "../../components/cards/notePreview"

export const Important = ({state,dispatch}) => {

    return (
        <>
            <div className='flex flex-col gap-6 w-full p-4 m-4'>
                <h2 className="m-0">Important</h2>
                {
                    state.notes?.length > 0 && state.notes.map(note => (
                        note.isImportant && !note.isBinned? <NotePreview note={note} dispatch={dispatch} /> : ''
                    ))
                }
            </div>
        </>
    )
}