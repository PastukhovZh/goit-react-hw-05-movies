import { useState } from "react";
import { Input, SearchForm } from "./Searchbar.styled";

const Searchbar = ({onSubmit}) => {
    const [search, setSearch] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (search === '' || null) {
        setSearch('')
      return alert(`Write something`);
    }
    onSubmit(search)
        setSearch('')
        // console.log(search)
  }

    const handleInput = e => {
        setSearch(e.currentTarget.value.toLowerCase().trim() )
    }
    return (<SearchForm onSubmit={handleSubmit}>
                <button type="submit"> <span>Find Movie</span> </button>
                <Input onChange={handleInput} value={ search } />
            </SearchForm>)
}

export default Searchbar