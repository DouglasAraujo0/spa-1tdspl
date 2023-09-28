export default function Header(props) {
  return (
    <>
      <header>
        <h1>Vite + React - Coded by Douglas Araujo</h1>
        <ul>
          {props.children.map((item, index) => {
              return item
          })
        }
        </ul>
      </header>
    </>
  );
}
