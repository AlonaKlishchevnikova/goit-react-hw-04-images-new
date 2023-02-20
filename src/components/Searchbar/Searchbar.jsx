import { useState } from 'react';
import PropTypes from "prop-types"
import styles from "./searchbar.module.css"


const Searchbar = ({onSubmit}) => {
    const [search, setSearch] = useState('');
  const handleChange = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };
        const handleSubmit = e => {
            e.preventDefault();
               if (search.trim() === '') {
      return alert(' Please enter a value for search images!');
    }
        onSubmit({search});
        setSearch('');
    }
     return (
            <header  className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit"className={styles.SearchFormButton}></button>
                    <input className={styles.SearchFormInput} type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                     value={search}
                 required/>
                
                </form>
            </header>
        )
}


export default Searchbar;
Searchbar.propTypes = {
   onSubmit: PropTypes.func.isRequired,
};