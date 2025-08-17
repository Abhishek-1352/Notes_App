import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation);

export const NotePreview = ({ note, dispatch }) => {

    const onPinClick = () => {
        dispatch({ type: "PINNED", payload: note.id })
    }
    const onArchiveClick = () => {
        dispatch({ type: "ARCHIVE", payload: note.id })
    }
    const onImportantClick = () => {
        dispatch({ type: "IMPORTANT", payload: note.id })
    }
    const onBinClick = () => {
        dispatch({ type: "BIN", payload: note.id })
    }

    //Icon Active Controls
    const isPinned = () => {
        return !note.isPinned ?
            <lord-icon
                src="https://cdn.lordicon.com/onmwuuox.json"
                trigger="hover">
            </lord-icon>
            :
            <lord-icon
                src="https://cdn.lordicon.com/dhmavvpz.json"
                trigger="hover"
                state="hover-roll">
            </lord-icon>
    }
    const isArchived = () => {
        return !note.isArchived ?
            <lord-icon src="https://cdn.lordicon.com/rrfthkgx.json" trigger="hover"></lord-icon>
            :
            <lord-icon
                src="https://cdn.lordicon.com/lzsupfwm.json"
                trigger="hover">
            </lord-icon>
    }
    const isImportant = () => {
        return !note.isImportant ?
            <lord-icon
                src="https://cdn.lordicon.com/uihwbzln.json" trigger="morph" stroke="bold" state="morph-select" colors="primary:#121331,secondary:#ffc738,tertiary:#ffffff">
            </lord-icon>
            :
            <lord-icon
                src="https://cdn.lordicon.com/uihwbzln.json"
                trigger="hover">
            </lord-icon>
    }
    const isBinned = () => {
        return !note.isBinned ?
            <lord-icon src="https://cdn.lordicon.com/oqeixref.json" trigger="hover"></lord-icon>
            :
            <lord-icon
                src="https://cdn.lordicon.com/oorvqwpg.json"
                trigger="hover">
            </lord-icon>
    }

    return (
        <>
            <div className="relative flex flex-col border-solid w-[250px] h-[150px] rounded-md">
                <span onClick={onPinClick} className='absolute top-0 right-0'>
                    {isPinned()}
                </span>

                <h2 className="p-1 m-1">{note.title}</h2>
                <p className="overflow-auto p-0.5 m-0.5"><pre className="p-0.5 m-0.5">{note.text}</pre></p>
                <footer>
                    <span onClick={onArchiveClick} className='absolute left-4 bottom-0'>
                        {isArchived()}
                    </span>

                    <span onClick={onImportantClick} className='absolute left-[110px] bottom-0'>
                        {isImportant()}
                    </span>

                    <span onClick={onBinClick} className='absolute right-4 bottom-0'>
                        {isBinned()}
                    </span>
                </footer>
            </div>
        </>
    )
}