import UserGreeting from './UserGreeting.jsx'

function App(){
  return (
    <>
        <UserGreeting isLoggedIn={true} username = "Shafeeq"/>
        <UserGreeting isLoggedIn={true} />

    </>
  );
}

export default App