import { Route, Routes } from "react-router-dom";
import Main from "./Component/Main/Main";
import Details from "./Component/Details/Details";
import Signup from "./Component/Signup/Signup";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}
