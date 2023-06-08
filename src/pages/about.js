function About() {
  return (
    <div
      style={{
        margin: "0px",
        padding: "10px 30px 340px",
        backgroundImage: "url(aboutframe.png)",
        backgroundSize: "cover",
      }}
    >
      <h2
        style={{
          color: "rgb(33, 37, 41)",
          fontFamily: "serif",
          textShadow: "2px 2px 3px black , 3px 3px 4px pink",
          margin: "200px 160px 10px",
        }}
      >
        Happy Cake Story:
      </h2>
      <h4
        style={{
          color: "rgb(33, 37, 41)",
          fontFamily: "serif",
          margin: "20px 160px 10px",
          textShadow: "2px 2px 3px black , 3px 3px 4px pink",
          textAlign: "justify",
          textJustify: "inter-word",
        }}
      >
        In my younger and more vulnerable years my father gave me some advice
        that I've been turning over in my mind ever since. 'Whenever you feel
        like criticizing anyone,' he told me, 'just remember that all the people
        in this world haven't had the advantages that you've had.' Tip: Resize
        the browser window to see how the value "justify" works.
      </h4>
    </div>
  );
}

export default About;
