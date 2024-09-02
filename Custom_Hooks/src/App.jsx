import Post from "./components/Post";
import useFetch from "./components/useFetch";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {data &&
        data.map((item) => (
          <ul key={item.id}>
            <li>Name: {item.name}</li>
            <li>Username: {item.username}</li>
            <li>Email: {item.email}</li>
            <li>Street: {item.address.street}</li>
            <li>City: {item.address.city}</li>
            <li>Zip Code: {item.address.zipcode}</li>
          </ul>
        ))}
      <Post />
    </div>
  );
};

export default App;
