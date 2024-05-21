function ProfilePicture(){
    
    const imageUrl = './src/assets/profilePic.jpg';
    const handleClick = (e) => e.target.style.display = "none";

    return(<img className="image" onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}

export default ProfilePicture