
import { NotePreview } from "../../components/cards/notePreview"

export const Bin = ({state,dispatch}) => {

    return (
        <>
            <div className='flex flex-col gap-6 w-full p-4 m-4'>
                <h2 className="m-0">Bin</h2>
                {
                    state.notes?.length > 0 && state.notes.map(note => (
                        note.isBinned? <NotePreview note={note} dispatch={dispatch} /> : ''
                    ))
                }
            </div>
        </>
    )
}