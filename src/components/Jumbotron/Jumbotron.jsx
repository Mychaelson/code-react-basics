import Band from "./band.jpeg";

const Jumbotron = () => {
  return (
    <section id="home">
      <div className="jumbotron">
        <img src={Band} alt="our band tampil in LA, Lenteng Agung" />
        <div className="band-caption">
          <h3>Lenteng Agung</h3>
          <p>Band kami bukan kaleng-kaleng</p>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
