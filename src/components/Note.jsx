import React, { useState } from "react";
function Note({  
    title,
     index,
      deleteNote, 
      setCurrentediting
     }) {

  return (
    <>
      <div className="noteHeadding">
        <h3
          className="temp"
          onClick={() => {
            setCurrentediting(index);
          }}
        >
          # {title.substring(0, 20)}...
        </h3>
        <button className="deleteButton" onClick={() => deleteNote(index)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Note;
