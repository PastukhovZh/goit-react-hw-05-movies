
import { useSearchParams } from "react-router-dom";
import { Input, SearchForm } from "./Searchbar.styled";

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
    
    const handleSubmit = (e) => {
        e.preventDefault()

        return onSubmit(query)

    
    //     setSearch('')
        // console.log(search)
  }


    return (<SearchForm onSubmit={handleSubmit}>
                <button type="submit"> <span>Find Movie</span> </button>
      <Input type="text" onChange={e => setSearchParam({ query: e.target.value })} value={ query } />
            </SearchForm>)
}




export default Searchbar