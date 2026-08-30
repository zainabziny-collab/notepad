import "./output.css";
import Home from "./Components/Home";
import { createContext, useState } from "react";
import useShow from "./Components/Hooks/useShow";
export const NewContext = createContext()

function App() {
  //////Input-States/////////////////////////////////////////////////////
  const [notes, setNotes] = useState([]);
  let [search, setSearch] = useState("")
  
  const [saveTitle, setSaveTitle] = useState("");
  const [saveText, setSaveText] = useState("");

  //////Add-Note-Style///////////////////////////////////////////////////
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [lineThrough, setLineThrough] = useState(false);
  const [clean, setClean] = useState(false);
  const [noteColor, setNoteColor] = useState({
    bg: "bg-white",
    text: "text-white"
  })

  //////Other////////////////////////////////////////////////////////////
  let {
    title, text,
    setTitle, setText,
    elementId, setElementId } = useShow(null)
  const noteToUpdate = notes.find((note) => note.id === elementId);

  //////Edit-Note-Style///////////////////////////////////////////////////
  const [editBold, setEditBold] = useState(false);
  const [editItalic, setEditItalic] = useState(false);
  const [editLine, setEditLine] = useState(false);
  const [editClean, setEditClean] = useState(false);
  const [editNoteColor, setEditNoteColor] = useState("")

  return (
    <>
      <NewContext.Provider value={{
        //////Input-States/////////////////////////////////////////////////////
        title, text,
        setTitle, setText,
        saveTitle, saveText,
        setSaveTitle, setSaveText,
        //////Other////////////////////////////////////////////////////////////
        elementId, setElementId,
        notes, setNotes,
        noteToUpdate,
        setSearch,search,
        //////Add-Note-Style///////////////////////////////////////////////////
        bold, setBold,
        italic, setItalic,
        lineThrough, setLineThrough,
        clean, setClean,
        noteColor, setNoteColor,
        //////Edit-Note-Style///////////////////////////////////////////////////
        editBold, setEditBold,
        editItalic, setEditItalic,
        editLine, setEditLine,
        editClean, setEditClean,
        editNoteColor, setEditNoteColor
      }}>
        <Home />
      </NewContext.Provider>
    </>
  );
}

export default App;
