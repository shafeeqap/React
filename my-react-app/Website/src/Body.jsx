
import image from './assets/female-college-student.png';

function Body(){
    return(
        <div className="row"> 
            <div className="colomn">
                <h1>Learn creative skills</h1><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sed dolor neque dolorem 
                    dolores culpa ea molestiae autem modi exercitationem, eum, ducimus ut corrupti provident 
                    quam ex fugiat atque molestias.</p>
            </div>
            <div className="colomn">
                <img src={image} alt="" />
            </div>
        </div>
    );
}

export default Body