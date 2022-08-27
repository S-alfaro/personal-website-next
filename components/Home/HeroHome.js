export default function HeroHome() {
  return (
    <>
      <section className="heroHomeBox">
        <div className="layout"></div>
        <iframe
          id='ytplayer'
          type='text/html'
          width="2000"
          height="2000"
          src="https://www.youtube.com/embed/EFPCtnngGoU?autoplay=1&mute=1&loop=1&showinfo=1&rel=0&playsinline=1&modestbranding=0&playlist=EFPCtnngGoU"
          frameBorder='0'
          allowFullScreen
        >
        </iframe>
      </section>
      <style jsx>
        {`
        section{
          position: relative;
          display: flex;
          width: 100%;
          height: 100vh;
          color: white;
          overflow: hidden;
          
        }
        .layout{
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: transparent;
          z-index: 2;
        }
        iframe {
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

      `}
      </style>
    </>
  )
}