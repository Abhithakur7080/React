import { useState, useRef, useEffect } from "react";
import { db } from "../firebaseinit";
import { collection, doc, deleteDoc, onSnapshot, setDoc } from "firebase/firestore";

// function blogsReducer(state, action){
//     switch(action.type){
//         case "ADD":
//             return [action.blog, ...state];

//         case "REMOVE":
//             return state.filter((blog, index) => index !== action.index);

//         default:
//             return [];
//     }
// }

export default function Blog(){
    
    // const [title, setTitle] = useState("");
    // const[content, setContent] = useState("");
    const [formData, setFormData] = useState({title: "", content: ""});
    const [blogs, setBlogs] = useState([]);
    // const [blogs, dispatch] = useReducer(blogsReducer, [])
    const titleRef = useRef(null)

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    // useEffect(() => {
    //     if(blogs.length && blogs[0].title){
    //         document.title = blogs[0].title;
    //     }
    //     else{
    //         document.title = "No Blogs"
    //     }
    // }, [blogs]);
    useEffect(() => {
    //     async function fetchData(){
    //         const snapshot = await getDocs(collection(db, "blogs"));
    //         console.log(snapshot);

        //     const blogs = snapshot.docs.map((doc) => {
        //         return{
        //             id: doc.id,
        //             ...doc.data()
        //         }
        //     })
        //     setBlogs(blogs);
        // }
    //     fetchData();
    // }, []);
    //realtime data base
    const unsub = onSnapshot(collection(db, "blogs"), (snapShot) => {
        const blogs = snapShot.docs.map((doc) => {
            return{
                id: doc.id,
                ...doc.data()
            }
        })
        console.log(blogs);
        setBlogs(blogs);
    })
}, []);
    async function handleSubmit(e){
        e.preventDefault();
        titleRef.current.focus();
        // setBlogs([{title: formData.title, content: formData.content}, ...blogs]);
        // dispatch({type: "ADD", blog: {title: formData.title, content: formData.content}});

        //type-1
        // const docRef = await addDoc(collection(db, "blogs"), {
        //     title: formData.title,
        //     content: formData.content,
        //     createdOn: new Date()
        // });
        // console.log("Document is written with Ids:", docRef.id)

        //type-2
        const docRef = doc(collection(db, "blogs"));
        await setDoc(docRef, {
            title: formData.title,
            content: formData.content,
            createdOn: new Date()
        });

        setFormData({title: "", content: ""});
        // titleRef.current.focus();
    }

    async function removeBlog(id){
        // setBlogs(blogs.filter((blog, index) => i!==index))
        // dispatch({type: "REMOVE", index: i})
        const docRef = doc(db, 'blogs', id);
        await deleteDoc(docRef);

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
                                ref={titleRef}
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
                    <button onClick={() => removeBlog(blog.id)} className="deletebtn remove">Delete</button>
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
