export default function HeroHome (){
  return(
    <>
      <section className="heroHomeBox">
        <h1>Title</h1>
      </section>
      <style jsx>
      {`
        .heroHomeBox{
          with: 100%;
          height: 100%;
          background-color: white;
          color: black;
          h1{
            font-size: 20px;
          }
        }
      `}
      </style>
    </>
  )
}