import List from "./List.jsx"

function App() {

  const fruits = [{id: 1, name: "apple", calories: 90}, 
                  {id: 2, name: "orange", calories: 50}, 
                  {id: 3, name: "banana", calories: 130}, 
                  {id: 4, name: "coconut", calories: 120}, 
                  {id: 5, name: "pineapple", calories: 40}];


  const vegitables = [{id: 6, name: "potato", calories: 90}, 
                      {id: 7, name: "tomato", calories: 50}, 
                      {id: 8, name: "carrots", calories: 130}, 
                      {id: 9, name: "cabbage", calories: 120}, 
                      {id: 10, name: "onion", calories: 40}];
  
  return(
        <>
          {fruits.length > 0 && <List items = {fruits} category="Fruits"/>}
          {vegitables.length > 0 && <List items = {vegitables} category="Vegitables"/>}
        </>
        );

  
}


export default App
