//GETTING REACT COMPONENTS
import { useContext, useState } from "react"
//GETTING COMPONENTS FROM AUTHCONTEXT
import { AuthContext } from "../../context/authContext";
//GETTING COMPONENTS FROM FIRESTORE
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
//GETTING COPONENTS FROM FIREBASE FILE
import { db } from "../../firebaseinit";

export const Search = () => {
    //making of state
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setError] = useState(false);

    // using current info frm auth context
    const { currentUser } = useContext(AuthContext);

    //search function
    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        );
        try{
            const querySnapshot = getDocs(q);
            (await querySnapshot).forEach((doc) =>{
                setUser(doc.data());
            });
        }
        catch(error){
            setError(true)
        }
    }

    // on entering key input functions
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    }

    //on selecting user function
    const handleSelect = async () => {
        const combinedId = currentUser.uid > user.uid
                            ? currentUser.uid + user.uid
                            : user.uid + currentUser.uid;

        try{
            const response = await getDoc(doc(db, "chats", combinedId));
            if(!response.exists()){
                await setDoc(doc(db, "chats", combinedId), { messages: []});

                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                })

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                })
            }
        }
        catch(error) {}
        setUser(null);
        setUsername("");
    }
    return (
        <>
            <div className="search">
                <div className="searchForm">
                    <input
                    type="text"
                    placeholder="Search a friend..."
                    onKeyDown={handleKey}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            {user && (
                
                <div className="user" onClick={handleSelect}>
                <div>
                    <img src={user.photoURL} alt="user-img"/>
                    <span>{user.displayName}</span>
                </div>
                <i className="fa-solid fa-message"></i>
            </div>
            )}
            {err && <span>Something went Wrong!!!</span>}
        </>
    )
}