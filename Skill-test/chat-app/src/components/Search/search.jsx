import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext";
import { collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebaseinit";

export const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setError] = useState(false);

    const { currentUser } = useContext(AuthContext);
    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        );
        console.log(q);
        try{
            const querySnapshot = getDocs(q);
            (await querySnapshot).forEach((doc) =>{
                console.log(doc);
                setUser(doc.data());
            });
        }
        catch(error){
            setError(true)
        }
    }

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    }

    const handleSelect = async () => {
        const combinedId = currentUser.uid > user.uid
                            ? currentUser.uid + user.uid
                            : user.uid + currentUser.uid;

        try{
            const response = await getDocs(doc(db, "chats", combinedId));
            if(!response.exists()){
                await setDoc(doc(db, "chats", combinedId), { message: []});

                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + "userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + "date"]: serverTimestamp(),
                })

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + "userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + "date"]: serverTimestamp(),
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
        </>
    )
}