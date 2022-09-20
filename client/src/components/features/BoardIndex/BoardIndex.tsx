import React, { useState } from "react";
import { fetchIndex } from "../../../apis/Board"
import { create } from "../../../apis/Board/create";
import { useApi } from "../../../apis/useApi"

export const BoardIndex: React.FC = () => {
  const [name, setName] = useState("");
  const {data, loading, reload} = useApi(fetchIndex);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
  }
  const handleClick = async () => {
    await create({name});
    reload();
  }
  if (loading || ! data) {
    return <>loading</>
  }
  return <>
    <input type="text" value={name} onChange={handleNameChange}/>
    <button onClick={handleClick}>create</button>
    {data.map((board) => <div key={board.id}>
    id:{board.id} name:{board.name}
    </div>)}
  </>
}