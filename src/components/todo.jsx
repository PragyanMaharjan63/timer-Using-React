import React, { useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

export default function todo() {
  const [todo, setTodo] = useState("");
  const [check, setCheck] = useState(false);
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(task));
  }, [task]);

  const onDelete = (todo) => {
    console.log("deleting", todo);
    setTask(
      task.filter((e) => {
        return e !== todo;
      })
    );
  };

  const onSubmit = (title) => {
    let sno;
    if (title === "" || title === " ") {
      alert("Enter the task");
    } else {
      console.log(task.length);
      // console.log(task[0].sno);
      if (task.length === 0) {
        sno = 0;
      } else {
        sno = task[task.length - 1].sno + 1;
      }
      const addTodo = {
        sno: sno,
        todo: title,
        check: false,
      };
      setTask([...task, addTodo]);
      setTodo("");
    }
  };
  return (
    <div className="flex flex-col w-72 bg-amber-200 border-2 border-[#442312] m-4 px-3 py-1 rounded-lg font-calsans">
      <h2 className="text-xl">To Do:</h2>
      <div>
        {task.map((item) => {
          return (
            <div className="flex justify-between" key={item.sno}>
              <div className="flex">
                {/* <MdCheckBoxOutlineBlank className="size-4 my-0.5 mr-1" /> */}
                <input
                  type="checkbox"
                  checked={item.check}
                  onChange={() => {
                    const updatedTasks = task.map((t) =>
                      t.sno === item.sno ? { ...t, check: !t.check } : t
                    );
                    setTask(updatedTasks);
                  }}
                  className="size-4 my-0.5 mr-2"
                />

                <p className="border-b-1 w-52 overflow-hidden">{item.todo} </p>
              </div>
              <button onClick={() => onDelete(item)}>
                <RiSubtractFill />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex relative">
        <MdCheckBoxOutlineBlank className="size-4 absolute my-0.5" />
        <input
          type="text"
          className="outline-none border-b-1 px-4 w-full"
          placeholder=" Enter the task"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          onClick={() => {
            onSubmit(todo);
          }}
        >
          {" "}
          <IoMdAdd className="size-5 font-bold" />{" "}
        </button>
      </div>
    </div>
  );
}
