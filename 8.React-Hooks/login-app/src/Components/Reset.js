import useLocalStorage from "./uselocalstorage";
export default function Reset(){

    // const [email,setEmail] = useState("");

    // useEffect(() => {
    //   let email = localStorage.getItem("email");

    //   if(email){
    //     setEmail(email);
    //   }
    // }, []);

    // useEffect(() => {
    //   localStorage.setItem("email", email);
    // }, [email]);

    const {email, setEmail} = useLocalStorage();
    
    return(
        <>
        <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>      
      <br />
        </>
    )
}