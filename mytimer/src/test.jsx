export default function App() {
  const fruits = [];

  fruits.push(<div key="apple">Apple</div>);
  fruits.push(<div key="banana">Banana</div>);
  fruits.push(<div key="kiwi">Kiwi</div>);

  // 👇️ or if you have an array of strings
  const names = ['Alice', 'Bob', 'Carl'];

  const namesJsx = [];

  names.forEach((name, index) => {
    namesJsx.push(
      <div key={index}>
        <h2>{name}</h2>
        <hr />
      </div>,
    );
  });

  return (
    <div>
      <div>{fruits}</div>

      <br />

      <div>{namesJsx}</div>
    </div>
  );
}