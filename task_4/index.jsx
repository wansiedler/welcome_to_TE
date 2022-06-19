import {
  Component,
  createRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

class MainComponent extends Component {
  myRef = createRef();

  toggleChildVisibility = () => this.myRef.current.toggleButton();

  render() {
    return (
      <>
        <button onClick={this.toggleChildVisibility}>
          toggle child component
        </button>
        <ChildComponent ref={this.myRef} />{" "}
      </>
    );
  }
}

const ChildComponent = forwardRef((props, ref) => {
  const [isActive, setIsActive] = useState(true);

  const toggleButton = () => setIsActive((currState) => !currState);

  useImperativeHandle(ref, () => ({
    toggleButton,
  }));

  if (isActive) {
    return <div>child component</div>;
  }
});
