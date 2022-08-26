
function Footer() {
  return (
    <>
      <footer>
        <div className="contentBox">
          <div className="logoSingBox">
            <div className="logoBox">
              <h1>Logo</h1>
            </div>
            <div className="signBox">
              <h4>works by Mirko Stopar</h4>
              <h4>|</h4>
              <h4>contact</h4>
            </div>
          </div>

          <div className="linkBox">

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
      </footer>
      <style jsx>{`
       footer{
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          z-index: 10;
          color: white;
          border-top: 1px solid black;
          color: black;
        }

        .contentBox {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }

        .logoSingBox{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 80%;
          height: 130px;
        }
        .logoBox{
          width: 30%;
        }
        .signBox{ 
          width: 30%;
          height: auto;
          justify-content: flex-end;
          display: flex;
          flex-direction: row;
          gap: 5px;

        }
        .linkBox{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 50px;
          background-color: gray;
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

export default Footer