//First React Code

`Codepen : https://codepen.io/rajmohan2695/pen/qBEprzR`

function Hana(props){
    return(
    <div class="border">
      <div class="elem">
        <h3 id="name">{props.name}</h3>
      <h3 id="age">{props.age}</h3>
      </div>
    </div>
    );
    }

    ReactDOM.render(<Hana name="Rajan" age="23"/>,document.getElementById('p1'))
    
    ReactDOM.render(<Hana name="Rajan2" age="43"/>,document.getElementById('p2'))

/*---------------------------------------------------------------*/

// Minized code

function Hana(props){
    return(
    <div class="border">
      <div class="elem">
        <h3 id="name">{props.name}</h3>
      <h3 id="age">{props.age}</h3>
      </div>
    </div>
    );
    }

    var app = (
        <div>
          <Hana name="Rajan" age="23"/>
          <Hana name="Raju" age="22"/>
        </div>
      );
      
      ReactDOM.render(app,document.getElementById('app'));

/*---------------------------------------------------------------*/