

// Make component called "Application" that returns a single DOM element
// Components should be uppercase

// class = className

// Add props param so we can get properties sent by the component rendering this component

// The app works. But it's big. And it's no better than if we just copy and pasted it in to our HTML file.
// If it gets any bigger, we are in trouble because we ahve to manage both JSX and html. Let's break it up into:
// 1. Header -- CHECK
// 2. Multiple Teams -- CHECK
// 3. Each team has a counter 

// State.
// Props are immutable. They do not change.
// State is piece of data, that DOES change.
// State has:
// 1. An initial value
// 2. (Infinite # of) changed values
// In the case of the NL east, all gamesBack start at 0
// Some kind of mutation occurs (namely, someone loses or wins a game)

// In ES5, to use state, React provides a component for us to use.
// It takes an object as a param.

// ANYTIME STATE CHANGES... THE COMPONENT WILL RE-RENDER


var teams = [
	{
		name: "Braves",
		gamesBack: 0,
		city: "Atlanta"
	},
	{
		name: "Nationals",
		gamesBack: 0,
		city: "Washington, D.C."
	},
	{
		name: "Marlins",
		gamesBack: 0,
		city: "Miami"
	},
	{
		name: "Mets",
		gamesBack: 0,
		city: "New York"
	},
	{
		name: "Phillies",
		gamesBack: 0,
		city: "Philadelphia"
	}
]

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

// Create a new component called Team to be used by Application
// We can use it twice with props
function Team(props){
	return(
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2 team">
				<div className="team-name col-sm-12">{props.city} {props.name}</div>
				<Counter gamesBack={props.gamesBack} />
			</div>
		</div>
	)
}

// var with the name of the Component
// The only REQUIRED property is render.
var Counter = React.createClass({
	render: function(){
		// back to the good old days...
		return(
			<div className="counter">
				<button className="btn btn-success">+</button>
				<div className="games-back">0</div>
				<button className="btn btn-danger">-</button>
			</div>
		)
	}
})

function Application(props){
	return(

		// Use map to loop through teams array. 
		// We no longer need:
		// 	<Team name="Braves" />
		// 	<Team name="Brewers" />
		// props.teams is an array, with team objects
		// sent Team the team object, in map, ES6 style

		<div className="container">
			{ /* <h1>{props.title}</h1> */ }
			<Header title={props.title} />
			{props.teams.map((team,index)=>{
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />
			})}
		</div>
	)
}

// Add a prop to send the title to the Application component 
ReactDOM.render(
	<Application title="NL East Scoreboard" teams={teams} />,
	document.getElementById('root')
)