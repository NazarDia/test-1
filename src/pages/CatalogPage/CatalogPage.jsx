import s from './CatalogPage.module.css';
import { useNavigate } from 'react-router-dom';
import Location from '../../components/Location/Location';
import Equipment from '../../components/VehicleEquipment/Equipment';
import Type from '../../components/VehicleType/Type';

export default function CatalogPage() {
  const navigate = useNavigate();
  const handleReturnClick = () => {
    navigate('/');
  };
  return (
    <>
      <Location />
      <Equipment />
      <Type />
      <button onClick={handleReturnClick}>Home</button>
    </>
  );
}
