export default function Button({ text, func, name }) {
  return (
    <button onClick={func} className={name}>
      {text}
    </button>
  );
}
