var recipes = require('./data/recipes').data;

exports.list = function(req, res) {
	res.render('recipes.ejs', {
		title: 'Clever Kitchens - Recipes List',
		recipes: recipes
	});
};

exports.single = function(req, res) {
	var data = recipes.filter(function(recipe) {
		return (recipe.url === req.params.title);
	});

	if(data.length > 0) {
		data = data[0];
		data.title = 'Clever Kitchens - Recipes';

		res.render('recipe.ejs', data);
	} else {
		res.status(404).render('error.ejs', {title: 'Recipe Not Found'});
	}
};