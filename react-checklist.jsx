var products = [
	{
		category: "Sporting Goods",
		name: "Football",
		price: "$49.99",
		inStock: true
	},
	{
		category: "Sporting Goods",
		name: "Baseball",
		price: "$9.99",
		inStock: true
	},
	{
		category: "Sporting Goods",
		name: "Basketball",
		price: "$29.99",
		inStock: false
	},
	{
		category: "Electronics",
		name: "iPod Touch",
		price: "$99.99",
		inStock: true
	},
	{
		category: "Electronics",
		name: "iPhone 5",
		price: "$399.99",
		inStock: false
	},
	{
		category: "Electronics",
		name: "Nexus 7",
		price: "$199.99",
		inStock: true
	}
]

// FilterableProductTable (orange): contains the entirety of the example
function FilterableProductTable(){
	return(
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable products={props.products} />
		</div>
	)
}

// SearchBar (blue): receives all user input
function SearchBar(props){
	return(
		<form className="search-bar">
			<input type="text" name="search" placeholder="Search..." />
			<div>
				<input type="checkbox" name="filter" />&nbsp;Only show products in stock
			</div>
		</form>
	)
}

// ProductTable (green): displays and filters the data collection based on user input
function ProductTable(props){
	// Init a local var to hold all our rows
	var rows = [];
	// Init a local var to keep track of what category we are on
	var lastCategory = "";
	var key = 0;
	props.products.map(function(currProduct, index){
		if(currProduct.category !== lastCategory){
			// we need to add this to our rows array because its a new cat
			rows.push(<ProductCategoryRow key={index} category={currProduct} />)
			var Category = currProduct.category;
			key++;
		}
		rows.push(<ProductRow key={index} randomThing={currProduct} />)
		key++;
	});
	<div className="product-table">
		<ProductCategoryRow />
	</div>
}

// ProductCategoryRow (turquoise): displays a heading for each category
function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}

// ProductRow (red): displays a row for each product
function ProductRow(){
	if(props.randomThing.inStock == true){
		var productClass == "text-success"
	}else{
		var productClass == "text-danger"
	}
	return(
		<tr>
			<td className={productClass}>{props.randomThing.name}</td>
			<td>{props.randomThing.price</td>
		</tr>
	)
}

function Application(){
	return(
		<FilterableProductTable products={props.products} />
	)
}


ReactDOM.render(
	<Application />,
	document.getElementById('container')
)