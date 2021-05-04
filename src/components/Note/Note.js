import React from 'react';

const Note = ({ id, content, date }) => (
    <li>
        <p>{ `Nota [${id}]: ${content}` }</p>
        <small>
        <time>{ date }</time>
        </small>
    </li>
);

export default Note;