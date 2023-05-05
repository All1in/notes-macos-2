import React from 'react';

const SideBar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {
    const dateObj = {
        hour: '2-digit',
        minute: '2-digit',
    }

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

    return (
        <div className='app-sidebar'>
            <div className="app-sidebar-header">
                <h1> Notes </h1>
                <button onClick={onAddNote}> Add </button>
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
                                <button
                                    onClick={() => onDeleteNote(id)}
                                >
                                        Delete
                                </button>
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
