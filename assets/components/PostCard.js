import Image from 'next/image'

export default function PostCard({ photo = '', title = 'Title', subtitle ='subtitle', description = 'A random description'  }) {
  return (
    <>
      <div className="postCardBox">
        <div className="photoBox">
          
        </div>
        <div className="textBox">
          <div className="titleBox">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          <div className="descriptionBox">
            <p>{description}</p>
          </div>
          <div className="linkBox">
            <p>Link</p>
          </div>
        </div>

      </div>
      <style jsx>
        {`
          .postCardBox {
            width: 450px;
            height: 500px;
            transition: all 2s;
          }:hover{
          
          }

          .photoBox{
            position: relative;
            width: 100%;
            height: 55%;
            background-color: grey;
            z-index: 1;
          }
          .textBox{
            background-color: transparent;
          }

          .titleBox{
            width: 100%;
            height: 50%;
            border-bottom: 1px solid black;
            margin: 0;
            padding-left: 10px;
          }
          .descriptionBox{
            width: 100%;
            height: 25%;
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .linkBox{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }

        `}
      </style>
    </>
  )
}