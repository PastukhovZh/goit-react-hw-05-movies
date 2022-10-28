

import { useSearchParams } from "react-router-dom";
import { Input } from "./Searchbar.styled";

// const Searchbar = ({onSubmit}) => {
//     const [search, setSearch] = useState('')
    
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (search === '' || null) {
//         setSearch('')
//       return alert(`Write something`);
//     }
//     onSubmit(search)
//         setSearch('')
//         // console.log(search)
//   }

//     const handleInput = e => {
//         setSearch(e.currentTarget.value.toLowerCase().trim() )
//     }
//     return (<SearchForm onSubmit={handleSubmit}>
//                 <button type="submit"> <span>Find Movie</span> </button>
//                 <Input onChange={handleInput} value={ search } />
//             </SearchForm>)
// }

const Searchbar = ({onSubmit}) => {
    const [searchParam, setSearchParam] = useSearchParams()
    const query= searchParam.get("query")
    
    if (query !=='') {
    onSubmit(query)
} 

    
    const handleInput = e => {
        onSubmit(query)
        setSearchParam({ query: e.target.value })
    }



    return (
      <Input type="text" onChange={handleInput} value={ query } />
            )
}




export default Searchbar