import { useEffect, useState } from "react"

function NavBar() {

  const [change, setChange] = useState(false)
  const cssClass = change ? ' active' : ''

  const onChangeScroll = ()=>{
    
    console.log(window.scrollY);
    if(window.scrollY > 450){
      setChange(true)
    } else(
      setChange(false)
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', onChangeScroll);

    return () => {
      window.removeEventListener('scroll', onChangeScroll);
    };
  }, [window.scrollY]);

  return (
    <>
      <header className={"headerBox" + cssClass}>

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
      </header>
      <style jsx>{`
        .headerBox {
          position: fixed;
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
          transition: 0.6s;
        }

        .active {
          background-color: #ffffffb5;
          color: black;
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