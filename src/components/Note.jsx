import React from "react";
import useTheme from "../hook/useTheme";

const Note = ({ note, i, handleCheck }) => {
  const { theme } = useTheme();

  return (
    <div className="" key={i}>
      <div
        className={`${theme.notes} ${i == 0 ? "rounded-t-md" : ""} ${
          i == note.length - 1 ? "rounded-b-md" : ""
        } w-full p-3  outline-none border-b-[1px] flex ${theme.border} ${
          theme.textColor
        } `}
      >
        <div
          className={` flex justify-center items-center rounded-full border-[1px] cursor-pointer ${
            note.completed ? "checkColor h-[26px] w-[26px] " : "p-3"
          }  mx-2 ${theme.textColor}`}
          onClick={() => {
            handleCheck(i);
          }}
        >
          <span className="select-none">{note.completed ? "✓" : ""}</span>
        </div>
        <span
          className={` select-none ${note.completed ? "line-through" : ""}`}
        >
          {note.text}
        </span>
      </div>
    </div>
  );
};

export default Note;
