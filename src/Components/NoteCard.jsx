/////React-Icons/////////////////////////////////////////////////////////
import { MdModeEditOutline } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { FaDownload } from "react-icons/fa6";

/////Hooks////////////////////////////////////////////////////////////////
import useAxios from "./Hooks/useAxios";

//////Context//////////////////////////////////////////////////////////////
import { NewContext } from "../App";
import { useContext, useEffect } from "react";

function NoteCard({ setShows }) {
  let { notes } = useAxios("");
  let {
    //////Input-States//////////////////////////////////////////////////////
    setSaveTitle,
    setSaveText,
    //////Edit-Note-Style///////////////////////////////////////////////////
    setEditBold,
    setEditItalic,
    setEditLine,
    setEditNoteColor,
    //////Other-States//////////////////////////////////////////////////////
    setElementId,
    elementId,
    noteToUpdate,
    search,
  } = useContext(NewContext);

  //////UseEffect////////////////////////////////////////////////////////////
  useEffect(() => {
    if (noteToUpdate) {
      setSaveTitle(noteToUpdate.title);
      setSaveText(noteToUpdate.text);
      setEditBold(noteToUpdate.bold);
      setEditItalic(noteToUpdate.italic);
      setEditLine(noteToUpdate.lineThrough);
      setEditNoteColor(noteToUpdate.noteColor);
    }
  }, [elementId]);

  //////Update-Function///////////////////////////////////////////////////////
  const update = (id) => {
    setShows((prev) => ({
      ...prev,
      editForm: !prev.editForm,
    }));
    setElementId(id);
  };
  //////Delete-Function///////////////////////////////////////////////////////
  const deleteFunc = (id) => {
    setShows((prev) => ({
      ...prev,
      deleteForm: !prev.deleteForm,
    }));
    setElementId(id);
  };
  //////Download-Function//////////////////////////////////////////////////////
  const handleDownload = (note) => {
    const text = `Title: ${note.title}\n
${note.text}
${note.date}
${note.editDate}
    `;
    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "note.txt";
    a.click();
    URL.revokeObjectURL(url);
    console.log(note);
  };

  //////Search-bar////////////////////////////////////////////////////////////////
  const filterNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className=" w-full h-fit grid gap-6 md:grid-cols-2 xl:grid-cols-3 ">
        {filterNotes.map((note) => (
          <div
            key={note.id}
            className={` h-66 text-gray-950 overflow-hidden shadow-[0_0_4px_0_black]/20 border-[#4a4a4a] ${note.noteColor.bg} px-5 py-4 flex flex-col justify-between items-start rounded-md`}
          >
            <div className=" w-full h-45 overflow-y-auto noScroll">
              <h2 className="text-[1.3rem] font-bold mb-1 ">{note.title}</h2>
              <p
                className={` ${note.textStyle} ${note.bold ? "font-bold" : ""} ${note.italic ? "italic" : ""} ${note.lineThrough ? "line-through" : ""}`}
              >
                {note.text}
              </p>
            </div>

            <div className="w-full h-fit flex justify-between items-end border-t">
              <div className="flex flex-col items-start justify-center ">
                <p className="text-[14px]">{note.date}</p>
                <p className="text-[14px]">{note.editDate}</p>
              </div>

              <div className=" flex gap-2 pt-1">
                <button
                  onClick={() => {
                    deleteFunc(note.id);
                  }}
                  className="size-8.5 bg-gray-950 cursor-pointer rounded-full grid place-items-center "
                >
                  <FiDelete className="text-red-500  " />
                </button>

                <button
                  onClick={() => {
                    update(note.id);
                  }}
                  className="size-8.5 bg-gray-950 cursor-pointer rounded-full grid place-items-center "
                >
                  <MdModeEditOutline className="text-[#e1f6ff] " />
                </button>

                <button
                  onClick={() => {
                    handleDownload(note);
                  }}
                  className="size-8.5 bg-gray-950 cursor-pointer rounded-full grid place-items-center "
                >
                  <FaDownload className="text-[#e1f6ff]  " />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NoteCard;
