import reactLogo from "../assets/react.svg"

export default function Section(props) {

let reactAlt = "React Logo";

  return (
    <>
      <section>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eos
            fuga harum asperiores quisquam repellat eveniet rerum repudiandae
            vero quam?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur quod libero, dolores, illum eaque nostrum nobis corrupti
            cumque provident odio debitis enim beatae error, facilis harum unde
            optio fuga aliquam!
          </p>
          <img src={reactLogo} alt={reactAlt} />
          <img src={props.viteLogoProps} alt={props.viteAlProps} />
        </div>
      </section>
    </>
  );
}
