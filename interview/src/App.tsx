import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  let listName: any = [];
  let [newArray, setNewArray] = useState([]);
  const addbutton = () => {
    listName = [...newArray, input];
    setNewArray(listName);
    console.log(listName);
  };
  const deleteFromList = (e: any) => {
    console.log("e", e, e.target, e.target.value);
    const targetdelete = e.target.value;
    setNewArray((prev) => prev.filter((_, e) => e != targetdelete));
  };

  return (
    <>
      {" "}
      <div className="height-[100] flex justify-center align-middle">
        <div className="h-[100px] w-[500px] flex justify-center">
          <input
            className="border-amber-900 bg-amber-300"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="border-b-black bg-green-600" onClick={addbutton}>
            Add
          </button>
        </div>
        <div className="border-2 w-56 h-56">
          {newArray?.map((e: any, i: any) => {
            return (
              <span className=" flex m-2" key={i}>
                <span className="border-2 m-2">{e}</span>
                <button
                  className="border-2 m-2"
                  value={i}
                  onClick={(e) => deleteFromList(e)}
                >
                  Delete
                </button>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
