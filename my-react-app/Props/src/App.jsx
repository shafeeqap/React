import Student from "./Students.jsx"

function App() {
  return(
    <>
      <Student name="Shafeeq" age = {30} isStudents = {false}/>
      <Student name="Rushdan" age = {10} isStudents = {true}/>
      <Student />

    </>
  );
}

export default App
