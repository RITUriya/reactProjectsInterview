import "./App.css";
import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function App() {
  const [input, setInput] = useState("");
  const [api, setApi] = useState<{ name: string }[]>([]);
  const debounce = useDebounce(input, 3000);
  const callApi = async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    ).then((res) => res.json());

    setApi(result.filter((e: { name: string }) => e.name === input));
  };
  useEffect(() => {
    if (debounce) {
      callApi();
    }
  }, [debounce]);

  return (
    <div>
      <div>
        {" "}
        {api.map((e, i) => {
          return <span key={i}>{e?.name}</span>;
        })}
      </div>
      <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={callApi}>Call Api</button>
      </div>
    </div>
  );
}
export default App;
