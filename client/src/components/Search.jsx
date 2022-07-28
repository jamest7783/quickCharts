

const Search = ( { search, setSearch }  ) => {

    return (
        <div>
            <form>
                <input placeholder='search by data, axis or profile'
                onChange={(e)=>setSearch( e.target.value )}>
                
                </input>
            </form>

        </div>
    )
}

export default Search
