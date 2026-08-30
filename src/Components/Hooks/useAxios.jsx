import { useEffect, useContext } from "react";
import axios from "axios";
import { NewContext } from "../../App";

function useAxios() {
  const {
    //////Input-States/////////////////////////////////////////////////////
    title,
    text,
    saveTitle,
    saveText,
    //////Add-Note-Style///////////////////////////////////////////////////
    bold,
    italic,
    lineThrough,
    noteColor,
    //////Edit-Note-Style///////////////////////////////////////////////////
    editBold,
    editItalic,
    editLine,
    editNoteColor,
    //////Other////////////////////////////////////////////////////////////
    elementId,
    notes,
    setNotes,
  } = useContext(NewContext);

  const date = "Created: " + new Date().toLocaleString();
  const editDate = "Updated: " + new Date().toLocaleString();
  const editNote = {
    title: saveTitle,
    text: saveText,
    editDate: editDate,
    bold: editBold,
    italic: editItalic,
    lineThrough: editLine,
    noteColor:editNoteColor
  };

  //////////GET///////////////////////////////////////////////////////////////////////////
  const handleGet = async () => {
    await axios.get("http://localhost:3005/Card").then((response) => {
      setNotes(response.data);
    });
  };

  useEffect(() => {
    handleGet();
  }, []);

  //////////POST//////////////////////////////////////////////////////////////////////////
  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3005/Card", {
        title,
        text,
        date,
        bold,
        italic,
        lineThrough,
        noteColor
      });
      await handleGet();
    } catch (error) {
      alert(error.message);
    }
  };

  //////////PATH///////////////////////////////////////////////////////////////////////////
  const handleUpdate = async () => {
    try {
      await axios.patch(`http://localhost:3005/Card/${elementId}`, editNote);
      await handleGet();
    } catch (error) {
      alert(error.message);
    }
  };

  //////////DELETE/////////////////////////////////////////////////////////////////////////
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3005/Card/${elementId}`);
      await handleGet();
    } catch (error) {
      alert(error.message);
    }
  };

  return { notes, handleSubmit, handleUpdate, handleDelete };
}

export default useAxios;
