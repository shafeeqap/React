import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="students">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Students: {props.isStudents ? "Yes" : "No"}</p>
        </div>
    );
}

Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudents: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudents: false,

}

export default Student