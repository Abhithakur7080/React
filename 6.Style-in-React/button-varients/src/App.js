import "./styles.css";
import { ButtonView } from "./ButtonVariants.styled";
export default function App() {
  return (
    <div className="App">
      <h3>Button Variants</h3>
      <div>
      <h3>Outlined Button</h3>
        <ButtonView>Outlined Button</ButtonView>
      </div>
      <div>
      <h3>Filled Button</h3>
        <ButtonView filled bg="cyan" color="red">Filled Button</ButtonView>
      </div>
    </div>
  );
}
