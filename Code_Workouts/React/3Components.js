//Components in react
const person = () => {
    return (
    <h3>I am a person</h3>
    );
}

<Person />

//Components with props (Properties)
const person = (props) => {
    return (
<h3>I am {props.name} and I am {props.age} years old.</h3>
    );
}

<Person name="Kavin" age="23"/>


//Component with Children property
const person = (props) => {
    return (
<h3>I am {props.name} and I am {props.age} years old.</h3>
<p>{props.children}</p>
    );
}

<Person name="Kavin" age="23">Hobbies : Playing Chess,Carrom</Person>