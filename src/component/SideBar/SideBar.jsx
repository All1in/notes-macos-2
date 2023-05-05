import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'

const SideBar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote, handleOk }) => {
    const dateObj = {
        hour: '2-digit',
        minute: '2-digit',
    }

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

    return (
        <div className='app-sidebar'>
            <div className="app-sidebar-header">
                <h1> Notes </h1>
                <AiOutlinePlus style={{cursor: 'pointer'}} size={27} onClick={onAddNote}> Add </AiOutlinePlus>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map((note) => {
                    const { id, title, body, lastModified } = note
                    return (
                        <div
                            key={id}
                            className={ `app-sidebar-note ${id === activeNote && 'active' }` }
                            onClick={() => setActiveNote(id)}
                        >
                            <div className='sidebar-note-title'>
                                <strong>{ title }</strong>
                                <BsFillTrashFill
                                    size={27}
                                    onClick={() => onDeleteNote(id)}
                                    // onClick={}
                                >
                                        Delete
                                </BsFillTrashFill>
                            </div>

                            <p> { body && note.body.substring(0, 100)} </p>

                            <small className='note-meta'>
                                Last modified { new Date(lastModified).toLocaleDateString('en-GB', dateObj)}
                            </small>
                        </div>
                     )
                })}
            </div>
        </div>
    );
};

export default SideBar;
