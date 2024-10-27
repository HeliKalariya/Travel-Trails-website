import Title from './Title';

const Services = () => {
  // Define the services data directly in this file
  const services = [
    {
      id: 1,
      icon: "fas fa-money-bill-wave",
      title: "Saving Money",
      text: "Travel the world without breaking the bank. Our carefully curated itineraries and exclusive deals help you experience more while spending less, ensuring every journey is affordable and unforgettable.",
    },
    {
      id: 2,
      icon: "fas fa-hiking",
      title: "Endless Hiking",
      text: "For the adventurous soul, we offer access to some of the most breathtaking hiking trails, from serene forest paths to rugged mountain terrains. Find your perfect trail and immerse yourself in nature’s beauty.",
    },
    {
      id: 3,
      icon: "fas fa-bed",
      title: "Amazing Comfort",
      text: "Enjoy the journey as much as the destination with our emphasis on comfort. From luxury accommodations to hassle-free travel plans, we make sure your comfort comes first every step of the way.",
    },
    {
      id: 4,
      icon: "fas fa-compass",
      title: "Personalized Itineraries",
      text: "Customize your adventure to fit your pace, interests, and style. Our personalized itineraries make sure every journey is uniquely yours.",
    },
    {
      id: 5,
      icon: "fas fa-leaf",
      title: "Sustainable Travel",
      text: "Travel responsibly with our eco-friendly travel options. We’re committed to preserving the beauty of our planet, so you can enjoy guilt-free adventures.",
    },
  ];

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
