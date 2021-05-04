import React from 'react';

const NewNote = ({ content, handleSubmitNewNote, handleChangeNewNote }) => {
    return (
        <form onSubmit={ handleSubmitNewNote }>
            <input type="text" name="content" onChange={ handleChangeNewNote } value={ content } />
            <button type="submit">Crear Nota</button>
        </form>
    )
}

export default NewNote;
