import Main from '../compositions/main';

const About = () => (
  <Main>
    <div>
      <h1>About Diet Gopher
      </h1>
      <p>We find foods to fit your dietary needs</p>
      <p> because dieting is hard, so let us do some of the work for you.</p>
      <div className="container">
        <div className="container">
          <img id="about-img" src="../static/img/berries-bananas-smoothie-bowl.jpg" />
        </div>
      </div>
      <style jsx>{`{
        .container{
          margin: 30px;
        }
      }`}</style>
    </div>
  </Main>
);

export default About;