import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
          "At Travel Trails, we’re passionate travelers, storytellers, and adventure seekers dedicated to bringing you the world’s most captivating destinations. Our mission is to inspire exploration and provide you with tools, guides, and insider insights to make each journey unforgettable. From hidden gems to iconic landmarks, we’re here to help you wander with purpose, discover with excitement, and explore like never before. Join us, and let’s continue exploring the world together!"


          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
