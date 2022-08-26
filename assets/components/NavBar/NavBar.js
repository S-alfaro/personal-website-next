
function NavBar() {
  return (
    <>
      <nav>

        <div className="contentBox">
          <div className="logoBox">
            <h1>Logo</h1>
          </div>

          <div className="linkBox">

            <div className="signBox">
              <h4>works by Mirko Stopar</h4>
              <h4>|</h4>
              <h4>contact</h4>
            </div>
            <div className="links">
              <a href="">documentary</a>
              <a href="">fiction</a>
              <a href="">book</a>
              <a href="">music video</a>
              <a href="">tv</a>
              <a href="">institutional</a>
              <a href="">commercial</a>
              <a href="">other</a>
            </div>

          </div>

        </div>
      </nav>
      <style jsx>{`
        nav{
          position: absolute;
          display: flex;
          flex-direction: row;
          justify-content: center;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 0;
          border-bottom: 1px solid white;
          background-color: transparent;
          z-index: 10;
          color: white;
        }

        .contentBox {
          display: flex;
          flex-direction: row;
          gap: 50px;
        }

        .logoBox{
          width: 280px;
          height: 100%;
        }

        .signBox{
          width: 100%;
          height: auto;
          justify-content: flex-end;
          display: flex;
          flex-direction: row;
          gap: 5px;

        }

        .links {
          display: flex;
          flex-direction: row;
          gap: 15px;
        }

      `}
      </style>
    </>
  )
}

export default NavBar