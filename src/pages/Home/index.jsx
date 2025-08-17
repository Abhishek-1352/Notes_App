import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import {v4 as uuid} from 'uuid'
import { NotePreview } from "../../components/cards/notePreview";


export const Home = ({state,dispatch}) => {
    defineElement(lottie.loadAnimation);


    const onTitleChange=(e)=>{
        dispatch({type:'TITLE' ,payload:e.target.value})
    }
    const onTextChange=(e)=>{
        dispatch({type:'TEXT' ,payload:e.target.value})
    }
    const onAddClick=()=>{
        dispatch({type:'ADD', payload:uuid()})
        dispatch({type:'CLEAN'})
    }

    return (
                <div className='p-2 w-screen'>
                    
                    <div className='flex flex-col w-[300px] relative p-2 justify-self-center'>
                        <h2 className="p-0 m-0">Create new</h2>
                        <input value={state.title} onChange ={onTitleChange} className='' type="text" placeholder='Enter Title' />
                        <textarea value={state.text} onChange ={onTextChange} className='h-10' type="text" placeholder='Enter Text' />
                        <lord-icon onclick={state.title?onAddClick:''} className='absolute bottom-2 right-2' src="https://cdn.lordicon.com/vjgknpfx.json" trigger="click" state="hover-swirl"></lord-icon>
                    </div>

                    <h3>Pinned Notes:</h3>
                    <div className='flex gap-6 '>
                        {
                            state.notes?.length>0 && state.notes.map(note=>(
                                !note.isArchived && !note.isBinned && note.isPinned?<NotePreview note={note}dispatch={dispatch}/>:''
                            ))
                        }
                        
                    </div>

                    <h3>All Notes:</h3>
                    <div className='flex gap-6 '>
                        {
                            state.notes?.length>0 && state.notes.map(note=>(
                                !note.isArchived && !note.isBinned && !note.isPinned?<NotePreview note={note}dispatch={dispatch}/>:''
                            ))
                        }
                        
                    </div>
                </div>
    )
}
