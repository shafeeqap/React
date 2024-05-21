import PropTypes from 'prop-types'



function List(props){

    // const fruits = [{id: 1, name: "apple", calories: 90}, 
    //                 {id: 2, name: "orange", calories: 50}, 
    //                 {id: 3, name: "banana", calories: 130}, 
    //                 {id: 4, name: "coconut", calories: 120}, 
    //                 {id: 5, name: "pineapple", calories: 40}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // ALPHABATICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) // REVERSE ALPHABATICAL
    // fruits.sort((a, b) => b.calories - a.calories) //NUMERICAL ORDER

    const itemList = props.items;
    const category = props.category;

    // const lowCalFruits = itemList.filter(item => item.calories > 100)

    const listItems = itemList.map(fruit => <li key={fruit.id}>
                                            {fruit.name}:&nbsp;
                                            <b>{fruit.calories}</b></li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}
List.defaultProps = {
    category:"Category",
    items: [],
  }
  List.prototype ={
    category:PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number}))
  }

export default List