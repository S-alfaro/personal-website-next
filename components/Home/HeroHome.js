export default function HeroHome() {
  return (
    <>
      <section className="heroHomeBox">
        <iframe
          id='ytplayer'
          type='text/html'
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/hcu6AooK1zI?autoplay=1&mute=1&loop=1&showinfo=1&rel=0&playsinline=1&modestbranding=0"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
      </section>
      <style jsx>
        {`
        section{
          width: 100%;
          height: 100vh;
          color: white;
          overflow: hidden;
          background-color: grey;
          
          h1{
            margin-top: 0;
            font-size: 20px;
          }
        }
      `}
      </style>
    </>
  )
}