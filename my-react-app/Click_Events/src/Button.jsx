

function Button(){

    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you cliked me ${count} time/s`);
        }else{
            console.log(`${name} stop clicked me!`);
        }
    };
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    return(
        <>
            <button onClick={() => handleClick("Shafeeq")}>Click me </button>
            {/* <button onClick={() => handleClick2("Shafeeq")}>Click me </button> */}
        </>
    );
}

export default Button