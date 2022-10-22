import { useState } from "react";
import { toast } from "react-toastify";

const Searchbar = ({onSubmit}) => {
    const [search, setSearch] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
    if (search === '') {
        toast.error('write something');
        
      return;
    }
    onSubmit(search)
        setSearch('')
        // console.log(search)
  }

    const handleInput = e => {
        setSearch(e.currentTarget.value.toLowerCase().trim() )
    }
    return (<form onSubmit={handleSubmit}>
                <button type="submit"> Find Movie </button>
                <input onChange={handleInput} value={ search } />
            </form>)
}

export default Searchbar