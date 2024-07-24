import { useState } from "react";
import Note from "./components/Note";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "./App.css";

function App() {
  const [notes, setNote] = useState([]);
  const [currentediting, setCurrentediting] = useState(null);

  function addNote() {
    const newNote = {
      title: "Enter a title",
      desc: "",
    };
    setNote([...notes, newNote]);
    setCurrentediting(notes.length);  // Automatically set the current editing note to the newly added note
  }

  const deleteNote = (index) => {
    let newNotes = notes.filter((item, ind) => ind !== index);
    
    if (newNotes.length === 0) {
      setCurrentediting(null);
    } else if (currentediting >= newNotes.length) {
      setCurrentediting(newNotes.length - 1);
    }

    setNote(newNotes);
  };

  return (
    <>
      <div className="mainWrapper">
        <div className="left">
          <button className="addButton" onClick={addNote}>Add Note</button>
          {notes.map((note, index) => {
            return (
              <Note
                title={note.title}
                setCurrentediting={() => setCurrentediting(index)}
                key={index}
                deleteNote={() => deleteNote(index)}
                index={index}
              />
            );
          })}
        </div>
        <div className="right">
          {currentediting != null && notes[currentediting] ? (
            <MarkdownEditor
              className="markDowneditor"
              onChange={(value, viewUpdate) => {
                let newValue = value;
                let newCopy = [...notes];
                newCopy[currentediting].desc = newValue;
                newCopy[currentediting].title = newValue.split("\n")[0];
                setNote(newCopy);
              }}
              value={notes[currentediting].desc}
            />
          ) : (
            <h1 className="">Please click on a specific note to edit...</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
