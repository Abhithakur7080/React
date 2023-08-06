import Student from './student';

function App() {
  return (
    <>
    <Student stuname ="Alexa" marks={60}/>
    <Student stuname ="Siri" marks={75}/>
    <Student stuname ="Google" marks={80}/>
    <Student marks={95}/>
    </>
  );
}
//pass default props
Student.defaultProps = {
  stuname: "Student",
  marks: "NA"
}
export default App;
