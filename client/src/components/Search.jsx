

const Search = ( { search, setSearch, charts }  ) => {

    let find = () => {
        //console.log('in search')
        let stack = charts.barCharts
        let found = []
        //console.log("---> ", stack)
        stack.map((post)=>{
            //console.log("title->",post.datasets[0].label)
            //console.log("x-values->",post.labels)
            let attributes = [...post.labels,post.datasets[0].label]
            for (let i=0;i<attributes.length;i++) {
                if (attributes[i]===search) {
                    console.log('found a match')
                }
            }
            //console.log('att',attributes)
        })
  
    }
    find() 






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
