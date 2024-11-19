export default function Button({ text, func }) {
  return <button onClick={func}>{text}</button>;
}
