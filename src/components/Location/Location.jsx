import s from './Location.module.css';
import { useState } from 'react';

export default function Location() {
  const [location, setLocation] = useState('Kyiv, Ukraine');
  const handleLocationChange = e => {
    setLocation(e.target.value);
  };
  return (
    <div className={s.locationContainer}>
      <label htmlFor="location" className={s.locationTitle}>
        Location
      </label>
      <select
        id="location"
        value={location}
        onChange={handleLocationChange}
        className={s.locationInput}
      >
        <option value="Kyiv">Kyiv, Ukraine</option>
        <option value="Odessa">Odessa, Ukraine</option>
        <option value="Dnipro">Dnipro, Ukraine</option>
        <option value="Kharkiv">Kharkiv, Ukraine</option>
        <option value="Mykolaiv">Mykolaiv, Ukraine</option>
      </select>
    </div>
  );
}
