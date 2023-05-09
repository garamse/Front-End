import { useState } from "react";
import DisplayMood from "./Components/DisplayMood/DisplayMood";
import MenuList from "./Components/MenuList/MenuList";

function App() {

  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <h1>오늘의 기분을 선택해주세요 🙌</h1>
      <MenuList mood = {currentMood} onItemClick = {setCurrentMood}/>
      <DisplayMood mood = {currentMood} />
    </div>
  );
}
export default App;
