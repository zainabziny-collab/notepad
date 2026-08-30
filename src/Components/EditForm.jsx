/////React-Icons/////////////////////////////////////////////////////////
import { FaBold, FaEraser, FaItalic, FaStrikethrough } from "react-icons/fa";
import { BsPaletteFill } from "react-icons/bs";

/////Hooks////////////////////////////////////////////////////////////////
import useAxios from "./Hooks/useAxios";
import useShow from "./Hooks/useShow";

//////Context//////////////////////////////////////////////////////////////
import { NewContext } from "../App";
import { useContext } from "react";

function EditForm({ setShows }) {
  const { handleUpdate } = useAxios("");
  const { error, setError, show, setShow } = useShow("");
  const {
    //////Input-States/////////////////////////////////////////////////////
    setSaveTitle,
    setSaveText,
    saveTitle,
    saveText,
    //////Edit-Note-Style///////////////////////////////////////////////////
    editBold,
    setEditBold,
    editItalic,
    setEditItalic,
    editLine,
    setEditLine,
    editNoteColor,
    setEditNoteColor,
  } = useContext(NewContext);

  //////Update-Function///////////////////////////////////////////////////////
  const updateFunc = () => {
    if (!saveTitle.trim() || !saveText.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    handleUpdate();
    setShows((prev) => ({
      ...prev,
      editForm: !prev.editForm,
    }));
  };
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 backdrop-blur-xl flex items-center justify-center px-5 sm:px-0">
      <div className="w-140 h-125 relative overflow-hidden z-100 dark:text-white text-black bg-white/90 dark:bg-gray-950 shadow-[0_0_12px_0_black]/70 dark:shadow-[0_0_8px_0px_white]/25 dark:border border-[#272626] rounded-xl  flex flex-col justify-start items-center ">
        <div className="w-full h-15 bg-gray-950 shadow-[0_0_5px_0_white]/30 flex justify-between items-center px-3 sm:px-7 ">
          <div className="w-full h-full flex items-center justify-between ">
            <div
              className="hover:bg-[#222223] px-3 py-2 rounded-md"
              onClick={() => {
                setShow(!show);
              }}
            >
              <BsPaletteFill className={`${editNoteColor.text}`} />
            </div>

            <div className="flex sm:gap-2 text-[#fe0] dark:text-white">
              <p
                className={`${editBold ? "bg-[#222223] px-3 py-2 rounded-md" : " px-3 py-2 rounded-md hover:bg-[#222223]"}`}
                onClick={() => {
                  setEditBold(!editBold);
                }}
              >
                <FaBold />
              </p>
              <p
                className={`${editItalic ? "bg-[#222223] px-3 py-2 rounded-md" : " px-3 py-2 rounded-md hover:bg-[#222223]"}`}
                onClick={() => {
                  setEditItalic(!editItalic);
                }}
              >
                <FaItalic />
              </p>
              <p
                className={`${editLine ? "bg-[#222223] px-3 py-2 rounded-md" : " px-3 py-2 rounded-md hover:bg-[#222223]"}`}
                onClick={() => {
                  setEditLine(!editLine);
                }}
              >
                <FaStrikethrough />
              </p>
              <p
                className="hover:bg-[#222223] px-3 py-2 rounded-md"
                onClick={() => {
                  setEditLine(false);
                  setEditItalic(false);
                  setEditBold(false);
                  setEditNoteColor({
                    bg: "bg-white",
                    text: "text-white"
                  });
                }}
              >
                <FaEraser />
              </p>
            </div>
          </div>
        </div>
        <div
          className={`w-60 h-40 absolute top-15 -left-70 rounded-md outline-none border bg-[#a29f9f] dark:bg-[#1b1b1d] flex items-center justify-center transition-all duration-100 transform  ${show ? "translate-x-75" : "translate-x-0"}`}
        >
          <div className="w-fit h-fit flex items-center justify-center flex-wrap gap-3">
            <div
              onClick={() => {
                setEditNoteColor({
                  bg: "bg-[#4998ec]",
                  text: "text-[#4998ec]",
                });
              }}
              className="size-10 border rounded-full bg-[#4998ec] "
            ></div>
            <div
              onClick={() => {
                setEditNoteColor({
                  bg: "bg-[#ed7ab7]",
                  text: "text-[#ed7ab7]",
                });
              }}
              className="size-10 border rounded-full bg-[#ed7ab7]"
            ></div>
            <div
              onClick={() => {
                setEditNoteColor({
                  bg: "bg-[#ffb700]",
                  text: "text-[#ffb700] ",
                });
              }}
              className="size-10 border rounded-full bg-[#ffb700] "
            ></div>
            <div
              onClick={() => {
                setEditNoteColor({
                  bg: "bg-[#ff876e]",
                  text: "text-[#ff876e]",
                });
              }}
              className="size-10 border rounded-full bg-[#ff876e]"
            ></div>
            <div
              onClick={() => {
                setEditNoteColor({
                  bg: "bg-[#b5b5b5]",
                  text: "text-[#b5b5b5]",
                });
              }}
              className="size-10 border rounded-full bg-[#b5b5b5]"
            ></div>
            <div
              onClick={() => {
                setEditNoteColor({
                  bg: "bg-white",
                  text: "text-white ",
                });
              }}
              className="size-10 border rounded-full bg-white"
            ></div>
          </div>
        </div>
        <div className="w-full h-110 flex flex-col items-center justify-center gap-3 px-6 ">
          <h2 className="text-2xl font-bold text-black dark:text-[#fe0] dark:text-shadow-[0_0_20px_#fe0] ">
            EditForm
          </h2>
          <div className="w-full h-70 flex flex-col gap-3 ">
            <input
              value={saveTitle}
              onChange={(e) => {
                setSaveTitle(e.target.value);
              }}
              type="text"
              placeholder="Edit the title..."
              className="w-full px-5 py-2 bg-[#a29f9f] dark:bg-[#1b1b1d] rounded-xl outline-none focus:shadow-[0_0_5px_0px_white]/30 "
            />
            <textarea
              value={saveText}
              onChange={(e) => {
                setSaveText(e.target.value);
              }}
              placeholder="Type to edit your note..."
              className={`w-full h-60 outline-none bg-[#a29f9f] dark:bg-[#1b1b1d] py-4 px-5 resize-none rounded-xl focus:shadow-[0_0_5px_0px_white]/30 ${editBold ? "font-bold" : ""} ${editItalic ? "italic" : ""} ${editLine ? "line-through" : ""}`}
            ></textarea>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="flex items-center justify-center gap-5 mb-3">
            <button
              className="px-8.5 py-2 rounded-md text-[1rem] font-semibold cursor-pointer text-[#fe0] bg-black dark:bg-[#fe0] dark:hover:shadow-[0_0_11px_2px_#fe0]/60 dark:text-black active:scale-95 transition-all duration-200 "
              onClick={updateFunc}
            >
              Add
            </button>
            <button
              className="px-6 py-2 rounded-md text-[1rem] font-semibold cursor-pointer text-[#fe0] bg-black dark:bg-[#fe0] dark:hover:shadow-[0_0_11px_2px_#fe0]/60 dark:text-black active:scale-95 transition-all duration-200 "
              onClick={() => {
                setShows((prev) => ({
                  ...prev,
                  editForm: !prev.editForm,
                }));
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
