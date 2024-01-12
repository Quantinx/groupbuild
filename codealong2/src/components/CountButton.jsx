function CountButton({ text = "Default Value", buttonClick }) {
  return <button onClick={buttonClick}>{text}</button>;
}

export default CountButton;
