function Header(){

    return (
        <header>
            <nav>
                <div className="head-container">
                    <h1>My Website</h1>
                </div>
                <ul className="list">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="search">
                    <input type="text" />
                </div>
            </nav>
            
        </header>
    )
}

export default Header