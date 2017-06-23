var Coin = React.createClass({

	sides: [
		'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
		'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
	],

	// this.state.image will now be accessible for the life of the program with the following setting of the state
	getInitialState: function(){
		return {
			image: this.sides[0]
		}
	},

	flipCoin: function(){
		var newSide;
		let randomSide = Math.round(Math.random());
		if(randomSide == 0){
			// The user flipped tails
			newSide = this.sides[randomSide]
			console.log("Tails!")
		}else{
			newSide = this.sides[randomSide]
			console.log("Heads!")
		}
		// this.state.image = newSide; BAD!!! this.setState.... React needs to manage state...
		this.setState({
			image: newSide
		})
	},

	render: function(){
		console.log("Rendering coin component")
		return(
			<div>
				<button onClick={this.flipCoin}>Click to Flip</button>
				<img src={this.state.image} />
			</div>
		)
	}
})

function Application(){
	console.log("Application component...")
	return(
		<div>
			<Coin />
			<Coin />
			<Coin />
		</div>
	)
}

ReactDOM.render(
	<Application />,
	document.getElementById('root')
)