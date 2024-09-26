import { useSearchContext } from "../contexts/SearchContexts"

const Search = () => {
    const search = useSearchContext();
    console.log(search);
    
    return <>Search Page</>;
};

export default Search;