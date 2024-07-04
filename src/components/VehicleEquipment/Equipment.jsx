import s from './Equipment.module.css';

export default function Equipment() {
  return (
    <>
      <p className={s.initialTitle}>Filters</p>
      <div className={s.equipmentContainer}>
        <p className={s.title}>Vehicle Equipment</p>
        <hr />
        <div className={s.equipmentBtns}>
          <button className={s.btns}>AC</button>
          <button className={s.btns}>Automatic</button>
          <button className={s.btns}> Kitchen</button>
          <button className={s.btns}>TV</button>
          <button className={s.btns}>Shower/WC</button>
        </div>
      </div>
    </>
  );
}
