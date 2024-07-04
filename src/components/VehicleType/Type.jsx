import s from './Type.module.css';

export default function Type() {
  return (
    <>
      <div className={s.typeContainer}>
        <p className={s.title}>Vehicle Type</p>
        <hr />
        <div className={s.typeBtns}>
          <button className={s.btns}>Van</button>
          <button className={s.btns}>Fully Integrated</button>
          <button className={s.btns}>Alcove</button>
        </div>
        <button>Search</button>
      </div>
    </>
  );
}
