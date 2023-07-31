// Complete the Form Component and export it
import func from "./func";
import { name, email } from "./HomePage";
const Form = () => (
  <>
    <div>
      <form onSubmit={func}>
        {/* Create a h3, 2 inputs and 1 button here */}
        <h3>Login Page</h3>
        <input type="text" value={name}/><br/><br/>
        <input type="email" value={email}/><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  </>
);
export {Form};
