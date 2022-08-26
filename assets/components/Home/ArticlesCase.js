 import PostCard from "../PostCard"
 
 export default function ArticleCase (){
  return (
    <>
      <section className="articleCaseBox">
        <div className="cardsBox">
            <div className="articleDescriptionBox">
              <p>Featured Article: En særegen dokumentarstemme - Rushprint</p>
            </div>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
      </section>
      <style jsx>
      {`
        .articleCaseBox{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          margin-top: 120px;
          margin-bottom: 70px;
        }

        .cardsBox{
          width: 950px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 50px;
        }
        .articleDescriptionBox{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 45px;
          border-top: 1px dotted black;
          border-bottom: 1px dotted black;
          margin-bottom: 30px;
        }
      `}
      </style>
    </>
  )
 }