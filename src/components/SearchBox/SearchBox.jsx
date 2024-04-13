import css from './SearchBox.module.css'


export default function SearchBox({find}) {
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="search"
        onChange={find}
      />
    </div>
  );
}