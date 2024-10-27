import Title from './Title';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.png';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpeg';



const Tours = () => {
  // Define the tours data directly in this file
  const tours = [
    {
      id: 1,
      img: img1,
      date: "Apr 10, 2025",
      title: "The Golden Triangle Tour",
      info: "Explore the famous Golden Triangle of India, covering Delhi, Agra, and Jaipur. A cultural journey through India's iconic landmarks.",
      location: "Delhi, Agra, Jaipur",
      duration: "5 Days",
      price: "Rs.15000",
    },
    {
      id: 2,
      img:img2,
      date: "Sep 10, 2025",
      title: "Backwaters of Kerala",
      info: "Cruise through the tranquil backwaters of Kerala on a houseboat, surrounded by scenic beauty and traditional villages.",
      location: "Alleppey, Kerala",
      duration: "7 Days",
      price: "Rs.20000",
    },
    {
      id: 3,
      img: img3,
      date: "Oct 1, 2025",
      title: "Rajasthan Desert Safari",
      info: "Experience the grandeur of Rajasthan with a desert safari, exploring forts, palaces, and the cultural heritage of India.",
      location: "Jaisalmer, Rajasthan",
      duration: "3 Days",
      price: "Rs.6000",
    },
    {
      id: 4,
      img: img4,
      date: "Nov 20, 2024",
      title: "Spiritual Varanasi",
      info: "Witness the spiritual heart of India along the Ganges, with sacred rituals, ancient temples, and vibrant ghats.",
      location: "Varanasi, Uttar Pradesh",
      duration: "3 Days",
      price: "Rs.8500",
    },
    {
      id: 5,
      img: img5,
      date: "Jun 5, 2025",
      title: "The Himalayas Trek",
      info: "Embark on a thrilling trek in the Himalayas, surrounded by breathtaking peaks and pristine nature.",
      location: "Manali, Himachal Pradesh",
      duration: "8 Days",
      price: "Rs.10000",
    },
    {
      id: 6,
      img: img6,
      date: "Nov 15, 2024",
      title: "Goa Beach Retreat",
      info: "Relax on the sun-kissed beaches of Goa, enjoy the vibrant nightlife, and indulge in delicious local cuisine.",
      location: "Goa",
      duration: "6 Days",
      price: "Rs.13450",
    },
  ];

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, date, title, info, location, duration, price } = tour;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
