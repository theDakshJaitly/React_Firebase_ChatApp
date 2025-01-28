import "./userinfo.css";

const Userinfo = () => {
    return(
        <div className="userinfo">
            <div className="user">
                <img src="./avatar.png" alt="avatar"/>
                <h2>Daksh Jaitly</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="more"/>
                <img src="./video.png" alt="more"/>
                <img src="./edit.png" alt="more"/>
            </div>

        </div>
    )
}

export default Userinfo;