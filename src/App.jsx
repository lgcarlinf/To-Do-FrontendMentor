import { useEffect, useState } from "react";
import Note from "./components/Note";
import useTheme from "./hook/useTheme";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [notes, setNotes] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [note, setNote] = useState("");
  const [isAllCompleted, setIsAllCompleted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, { text: note, completed: false }]);
    setSelectedNotes([...notes, { text: note, completed: false }]);
    setNote("");
  };

  const handleCheck = (i) => {
    const newNotes = [...notes];
    newNotes[i].completed = !newNotes[i].completed;
    setNotes(newNotes);
  };

  const toggleallCompleted = () => {
    notes.map((note) => {
      return (note.completed = !isAllCompleted);
    });
    setIsAllCompleted(!isAllCompleted);
  };

  const selectCompletedNotes = () => {
    const completedNotes = notes.filter((note) => note.completed);
    setSelectedNotes(completedNotes);
    setActiveFilter("completed");
  };

  const selectActiveNotes = () => {
    const activeNotes = notes.filter((note) => !note.completed);
    setSelectedNotes(activeNotes);
    setActiveFilter("active");
  };

  const selectAllNotes = () => {
    setSelectedNotes(notes);
    setActiveFilter("all");
  };

  const clearCompleted = () => {
    const activeNotes = notes.filter((note) => !note.completed);
    setNotes(activeNotes);
    setSelectedNotes(activeNotes);
    setIsAllCompleted(false);
  };

  useEffect(() => {
    setSelectedNotes(notes);
  }, [notes]);

  return (
    <div
      className={` h-screen transition-all duration-500`}
      style={{ background: theme.background }}
    >
      <header
        className={`App ${theme.image} h-52 bg-center bg-cover transition-all duration-500`}
      ></header>
      <main className="flex flex-col mt-[-150px]  mx-10 ">
        <div className="flex justify-between items-center w-full max-w-[550px] mx-auto h-full ">
          <h1 className="text-white text-3xl">TODO</h1>
          <img
            src={`${
              theme.theme === "dark"
                ? "./images/icon-sun.svg"
                : "./images/icon-moon.svg"
            }`}
            alt=""
            className="cursor-pointer"
            onClick={toggleTheme}
          />
        </div>
        <form className="w-full max-w-[550px] mx-auto" onSubmit={handleSubmit}>
          <div className="flex relative mt-6 w-full">
            <div
              className={`flex justify-center items-center cursor-pointer absolute rounded-full border-[1px] ${
                isAllCompleted ? "checkColor h-[26px] w-[26px]" : "p-3"
              } border-slate-300 left-3 bottom-[13px] text-white`}
              onClick={notes.length >= 1 ? toggleallCompleted : undefined}
            >
              {isAllCompleted ? "✓" : ""}
            </div>
            <input
              type="text"
              placeholder="Create a new todo..."
              className={`rounded-md w-full p-3 pl-[52px] outline-none border-none ${theme.textColor} ${theme.notes} `}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className="mt-[22px]">
            {selectedNotes.map((note, i) => (
              <Note note={note} i={i} handleCheck={handleCheck} />
            ))}
            <div
              className={` flex gap-2 justify-between ${theme.notes}  w-full p-3  outline-none border-b-[1px] flex ${theme.border} ${theme.textColor}`}
            >
              <div>{selectedNotes.length} items left</div>
              <div className="flex gap-3">
                <div
                  className={`cursor-pointer  ${
                    activeFilter === "all" ? "text-[#3A7BFD]" : ""
                  }`}
                  onClick={selectAllNotes}
                >
                  All
                </div>
                <div
                  className={`cursor-pointer  ${
                    activeFilter === "active" ? "text-[#3A7BFD]" : ""
                  }`}
                  onClick={selectActiveNotes}
                >
                  Active
                </div>
                <div
                  className={`cursor-pointer ${
                    activeFilter === "completed" ? "text-[#3A7BFD]" : ""
                  }`}
                  onClick={selectCompletedNotes}
                >
                  Completed
                </div>
              </div>
              <div className="cursor-pointer" onClick={clearCompleted}>
                Clear Completed
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
