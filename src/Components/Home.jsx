/////React-Icons/////////////////////////////////////////////////////////
import { FaRegStickyNote } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

//////Components/////////////////////////////////////////////////////////
import AddNoteForm from "./AddNoteForm";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";
import NoteCard from "./NoteCard";

/////Hooks////////////////////////////////////////////////////////////////
import { useState, useEffect, useContext } from "react";

//////Context/////////////////////////////////////////////////////////////
import { NewContext } from "../App";

const Home = () => {
  const { setSearch } = useContext(NewContext);

  //////States////////////////////////////////////////////////////////////
  let [mode, setMode] = useState(false);
  const [shows, setShows] = useState({
    deleteForm: false,
    editForm: false,
    addForm: false,
  });

  //////Dark_Mode_UseEffect(get-localStorage)/////////////////////////////
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setMode(true);
    }
  }, []);

  //////Dark_Mode_UseEffect////////////////////////////////////////////////
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [mode]);

  return (
    <>
      <div className="w-full min-h-screen dark:bg-gray-950 bg-[#e7f1fb] p-5  ">
        <header className="w-full h-[75px] fixed top-0 left-0 z-5 text-black dark:text-white bg-sky-200 dark:bg-gray-950 flex items-center justify-between px-6 shadow-[0_0_5px_0_white]/40 ">
          <nav className="flex gap-2 items-center justify-center ">
            <FaRegStickyNote className="text-2xl text-black dark:text-[#fe0] " />
            <h1 className="text-2xl font-bold text-black dark:text-[#fe0] dark:text-shadow-[0_0_15px_#fe0] ">
              Notes
            </h1>
          </nav>
          <div className="w-8/10 flex justify-end items-center gap-3 ">
            <div className=" flex flex-row w-60 sm:w-90 md:w-120 lg:w-150 items-center gap-2 py-1 px-3 lg:py-1.5 lg:px-5 rounded-3xl bg-white dark:bg-white/10  ">
              <FiSearch className="text-[15px] lg:text-[17px] " />
              <input
                type="text"
                className="w-[95%] h-full outline-none"
                placeholder="Search for ..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div
              onClick={() => {
                setMode(!mode);
              }}
              className="size-9 dark:bg-white/10 bg-black rounded-full grid place-items-center"
            >
              {mode ? (
                <CiLight className="text-xl text-[#fe0]" />
              ) : (
                <MdDarkMode className="text-xl text-[#fe0]" />
              )}
            </div>
          </div>
        </header>

        <div className=" w-full h-fit mt-[75px] py-8 px-7 sm:px-22 md:px-2 lg:px-16 xl:px-7 flex flex-col gap-10 items-center ">
          <NoteCard setShows={setShows} />
          <button
            className="px-8 py-3 bg-slate-950 text-white rounded-md text-[1.1rem] font-semibold cursor-pointer dark:shadow-[0_0_7px_0_white]/60 dark:hover:bg-[#fe0] dark:hover:shadow-[0_0_12px_3px_#fe0]/60 dark:hover:text-black hover:text-[#fe0] active:scale-95 transition-all duration-200 "
            onClick={() => {
              setShows((prev) => ({
                ...prev,
                addForm: !prev.addForm,
              }));
            }}
          >
            Add Note
          </button>
        </div>
      </div>
      {shows.addForm && <AddNoteForm setShows={setShows} />}
      {shows.editForm && <EditForm setShows={setShows} />}
      {shows.deleteForm && <DeleteForm setShows={setShows} />}
    </>
  );
};

export default Home;
