import { useState } from "react"
import {useHistory} from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody]= useState('');
    const [author, setAuthor] = useState('somesh')
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog= {title, body, author}
        setIsPending(true)
        fetch('http://localhost:5000/blogs',{
            method : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(blog)

        })
        .then(() => {
            setIsPending(false)
            history.push('/')
        })
        

    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                    required
                />
                <label>Blog Body:</label>
                <textarea
                required
                onChange={ (e) => setBody(e.target.value)}></textarea>

                <label>Author:</label>
                <select
                onChange={ (e) => setAuthor(e.target.value)}>
                   <option value="somesh">Somesh</option>
                   <option value="raman">Raman</option>
                   <option value="hilarious">hilarious</option> 
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled> Adding Blog </button>}
            </form>
            
            
        </div>
    )
}

export default Create
