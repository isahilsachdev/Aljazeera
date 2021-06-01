import React from 'react';
import { useHistory } from 'react-router-dom';
const DataContext = React.createContext();

function DataContextProvider({ children }) {
    DataContext.displayName = "Sidhant";
    const history = useHistory();
    console.log(history);

    const [searchInput, setSearchInput] = React.useState("");
    
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearchClick = () => {
        console.log(searchInput);
        history.push(`/search/${searchInput}`);        
    }

    const value = {
        handleSearchClick,
        handleSearchInputChange,
        searchInput,
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContextProvider };
export { DataContext };