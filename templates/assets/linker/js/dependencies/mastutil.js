// Set up simple root scope for convenience
// (add any global defaults here)
Mast.$scope = new Mast.Model({
	// ...
});



/**
 * Simple factory to return an instantiated Backbone.Collection
 * (can still access all the things-- see README.md)
 *
 * Good solution for most simple collections.
 * 
 * @param  {Default} definition
 *         [Optional-- definition for models (schema)]
 * @return {Mast.Collection}
 */
Mast.Collection.factory = function collectionFactory (definition) {
	definition = definition || {};

	// Allow `attributes` to be passed in instead of `defaults`
	// 
	var M = Mast.Model.extend({
		defaults: definition.defaults || definition.attributes
	});
	var C = Mast.Collection.extend(_.extend(definition,{
		model: M
	}));

	var instantiatedCollection = new C();
	instantiatedCollection.schema = (new M()).attributes;
	return instantiatedCollection;
};

/**
 * Simple factory to return an instantiated Backbone.Model
 * (can still access all the things-- see README.md)
 *
 * Good solution when you need a simple model by itself (e.g. account).
 * 
 * @param  {Default} definition
 *         [Optional-- default definition for models (schema)]
 * @return {Mast.Model}
 */
Mast.Model.factory = function modelFactory (definition) {
	definition = definition || {};
	if (!definition.urlRoot) {definition.urlRoot = function(){return (Mast.apiRoot || '') + definition.api;}}

	// Allow `attributes` to be passed in as our model `defaults`
	definition.defaults = definition.defaults || definition.attributes;

	var M = Mast.Model.extend(definition);
	var instantiatedModel = new M();
	instantiatedModel.schema = (new M()).attributes;
	return instantiatedModel;
};
