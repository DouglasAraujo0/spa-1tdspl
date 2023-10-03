export default function Header(props) {
  return (
    <>
      <header>
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
