//asynchronous javascript
//using setTimeOut
var a = () => {
	setTimeout(() => {
		console.log("Async, Hey there");
	},2000);								//2000 milliseconds
}

var b = () => {
	console.log("Hey there");
	a();
	console.log("The End");
}

b();

			//--or--

var a = () => {
	console.log("Async, Hey there");
}

var b = () => {
	console.log("Hey there");
	setTimeout(a,2000);					//for setTimeout, we dont have to specify empty braces for a function
	console.log("The End");
}

b();

/*	Output
		Hey there
		The End
		Async, Hey there		//After 2secs

*/

/*---------------------------------------------------------------*/

//Callback hell

function start(){
	var id = [122,100,123,432];
	setTimeout(() => {
		console.log(id);

		setTimeout(id => {
			var recipe = { title : "Fresh Tomamto Sandwich", 
						   Publisher : "Jonas Jonan"};
			console.log(`${id} : ${recipe.title}`);

				setTimeout(pub => {
					var recipe2 = {title : "Cheese burger"};
					console.log(`tite : ${recipe2.title} : Publisher : ${pub}`);
				},1500,recipe.Publisher);

   		 },2000,id[2]);

    },1500);
}
start();

/* Output:

	[122, 100, 123, 432]
	123 : Fresh Tomamto Sandwich
	tite : Cheese burger : Publisher : Jonas Jonan

*/

/*---------------------------------------------------------------*/

var getIDs = new Promise((resolve,reject) =>{
		setTimeout(() => {
			var id = [121,423,121,54];
			resolve(id);
},2500);
});

var getRecipe = id => {
	return new Promise((resolve,reject) =>{
		setTimeout(id => {
		var recipe = {
			title : "Fresh tomato Pizza",
			Publisher : "Jonas Jonan"
	};
		resolve(`${id} : ${recipe.title}`);
},2000,id)		
});
};

	var recipe2 = publisher =>{
	return new Promise((resolve,reject) =>{
		setTimeout(pub => {
			var recipe2 = { title : "Green Sandwich"};
				resolve(`${recipe2.title} : ${pub}`);
},1500,publisher);
});
};

getIDs
.then(id => {
		console.log(id);
		return getRecipe(id[2]);
	})

.then(recipe => {
		console.log(recipe);
return recipe2("Little John")
})

.then(recipe2 => {
		console.log(recipe2);
})

.catch(error =>{
	console.log(error);
});

/* Output
	[121, 423, 121, 54]
	121 : Fresh tomato Pizza
	Green Sandwich : Little John
*/

/*---------------------------------------------------------------*/

var getIDs = new Promise((resolve,reject) =>{
		setTimeout(() => {
			var id = [121,423,121,54];
			resolve(id);
},2500);
});

var getRecipe = id => {
	return new Promise((resolve,reject) =>{
		setTimeout(id => {
		var recipe = {
			title : "Fresh tomato Pizza",
			Publisher : "Jonas Jonan"
	};
		resolve(`${id} : ${recipe.title}`);
},2000,id)		
});
};

var recipe2 = publisher =>{
	return new Promise((resolve,reject) =>{
		setTimeout(pub => {
			var recipe2 = { title : "Green Sandwich"};
				resolve(`${recipe2.title} : ${pub}`);
},1500,publisher);
});
};

	/*  Asyc/await  */
async function execute(){
	const a = await getIDs;
	console.log(a);
	const b = await getRecipe(a[1]);
	console.log(b);
	const c = await recipe2('Jonas John');
	console.log(c);
}

execute();