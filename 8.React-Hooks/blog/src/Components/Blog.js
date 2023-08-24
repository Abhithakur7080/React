import { useState} from "react";
export default function Blog(){
    
    // const [title, setTitle] = useState("");
    // const[content, setContent] = useState("");
    const [formData, setFormData] = useState({title: "", content: ""});
    const [blogs, setBlogs] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        setBlogs([{title: formData.title, content: formData.content}, ...blogs]);
        setFormData({title: "", content: ""});
    }
    function removeBlog(i){
        setBlogs(blogs.filter((blog, index) => i!==index))
    }

    return(
        <>
        <h1>Write a Blog!</h1>

        <div className="section">
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                value={formData.title}
                                onChange={(e) => setFormData({title: e.target.value, content: formData.content})}
                                />
                </Row >
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                value={formData.content}
                                onChange={(e) => setFormData({title:formData.title, content: e.target.value})}
                                />
                </Row >         
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>
        <h2> Blogs </h2>
            {blogs.map((blog, i) => (
                <div className="blog" key={i}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <button onClick={() => removeBlog(i)} className="deletebtn remove">Delete</button>
                </div>
            ))}
        
        </>
        )
    }

function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
