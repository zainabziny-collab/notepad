/////Hooks////////////////////////////////////////////////////////////////
import useAxios from "./Hooks/useAxios";

function DeleteForm({ setShows }) {
  const { handleDelete } = useAxios("");

  //////Delete-Function////////////////////////////////////////////////////
  const deleteFunc = () => {
    handleDelete();
    setShows((prev) => ({
      ...prev,
      deleteForm: !prev.deleteForm,
    }));
  };
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 backdrop-blur-xl flex items-center justify-center px-5 sm:px-0 dark:text-white text-black">
      <div className="w-95 h-55 dark:bg-[#1b1b1d] bg-white/90 flex flex-col items-center justify-center gap-5 rounded-xl shadow-[0_0_12px_0_black]/70 dark:shadow-[0_0_8px_0px_white]/25">
        <p className="text-[1.1rem] font-semibold ">
          Are you sure you want to delete?
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="px-8.5 py-2 rounded-md text-[1rem] font-semibold cursor-pointer bg-black text-[#fe0] dark:text-black dark:bg-[#fe0] dark:hover:shadow-[0_0_11px_2px_#fe0]/60 active:scale-95 transition-all duration-200 "
            onClick={deleteFunc}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setShows((prev) => ({
                ...prev,
                deleteForm: !prev.deleteForm,
              }));
            }}
            className="px-8.5 py-2 rounded-md text-[1rem] font-semibold cursor-pointer bg-black text-[#fe0] dark:text-black dark:bg-[#fe0] dark:hover:shadow-[0_0_11px_2px_#fe0]/60 active:scale-95 transition-all duration-200 "
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteForm;
