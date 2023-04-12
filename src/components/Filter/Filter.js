import css from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};
export default Filter;
