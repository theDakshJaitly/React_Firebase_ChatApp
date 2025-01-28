import "./details.css";

const Details = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="avatar" />
        <h2>The Real Daksh Jaitly</h2>
        <p>SAYYYYY WWWWWW</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrow.png" alt="arrow" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="arrow" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="arrow" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="public/plain-black-desktop-2560-x-1440-ugpl0479gu0vuwnl.jpg" alt="" />
                <span>Painting</span>
              </div>
              <img src="./download.png" alt="arrow" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="public/plain-black-desktop-2560-x-1440-ugpl0479gu0vuwnl.jpg" alt="" />
                <span>Painting</span>
              </div>
              <img src="./download.png" alt="arrow" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="public/plain-black-desktop-2560-x-1440-ugpl0479gu0vuwnl.jpg" alt="" />
                <span>Painting</span>
              </div>
              <img src="./download.png" alt="arrow" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="public/plain-black-desktop-2560-x-1440-ugpl0479gu0vuwnl.jpg" alt="" />
                <span>Painting</span>
              </div>
              <img src="./download.png" alt="arrow" />
            </div>
          </div>
        </div>
        <button className="Block">Block User</button>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Details;