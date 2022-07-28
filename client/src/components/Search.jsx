

const Search = ({search,setSearch,shelf,setFound})=>{

    let find=(e)=>{
        if (!e.target.value){
            setFound(shelf)
        } else {
            setSearch(e.target.value)
            let found=[]
            let stack=shelf
            stack.map((post)=>{
                let attr=[...post.labels,post.datasets[0].label]
                for (let i=0;i<attr.length;i++){
                    if ((search===attr[i].substr(0,search.length)&&!found.includes(post._id))||
                        (attr[i]===search&&!found.includes(post._id))){
                        found.push(post)
                    }
                }
            })
            setFound(found)
        }
    }

    return (
        <div>
            <form>
                <input placeholder='search by data, axis or profile' onChange={(e)=>find(e)}></input>
            </form>

        </div>
    )
}

export default Search
