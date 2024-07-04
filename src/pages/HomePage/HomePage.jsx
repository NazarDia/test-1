import s from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const handleProceedClick = () => {
    navigate('/catalog');
  };

  return (
    <>
      <div className={s.container}>
        <h1 className={s.logo}>Camper Rental Service</h1>
        <p>
          Welcome to our company specializing in camper van rentals in Ukraine!
          We are excited to offer you a unique opportunity to explore the most
          beautiful corners of our country in cozy and comfortable mobile
          accommodations.
        </p>
        <p>
          Whether you&apos;re planning to traverse the scenic routes of the
          Carpathian Mountains, visit picturesque towns in the West, or relax
          along the shores of the Black Sea, our camper vans will be your
          reliable companion on this exhilarating journey.
        </p>
        <p>
          Our fleet includes modern models equipped with everything you need for
          convenient and safe travel. You can rest assured of their reliability
          and comfort throughout your trip.
        </p>
        <p>
          Our team is dedicated to providing not only quality service and
          support but also personal advice on routes, overnight locations, and
          interesting places to visit. We strive to make your journey
          unforgettable and completely secure.
        </p>
        <p>
          Join our satisfied customers who have already experienced the benefits
          of traveling with our camper vans. Plan your next adventure in Ukraine
          with us!
        </p>
        <button className={s.proceedBtn} onClick={handleProceedClick}>
          Proceed to Catalog
        </button>
      </div>
    </>
  );
}
