import React from 'react';
import ReactMarkdown from "react-markdown"

const Workspace = ({ activeNote, onUpdateNote }) => {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        })
    }

    if(!activeNote) return <div className='no-active-note'> No note Selected </div>
    const { title, body } = activeNote
    return (
        <div className='app-main'>
            <div className='app-main-note-edit'>
                <input
                    type='text'
                    id='title'
                    placeholder='Note Title'
                    value={activeNote.title}
                    onChange={(e) => onEditField('title', e.target.value)}
                    autoFocus
                />
                <textarea
                    id='body'
                    placeholder='Write your note here...'
                    value={activeNote.body}
                    onChange={(e) => onEditField('body', e.target.value)}
                />
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{ title }</h1>
                <ReactMarkdown className="markdown-preview">
                    { body }
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Workspace;
