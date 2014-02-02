

## Example Component

```javascript

/**
 * `SomeComponent`
 *
 * @type {Mast.Component}
 * @region someChildRegion  [Foo, Bar, Baz]
 * @region contentRegion    [Home, Contact, Pricing]
 * @region productsListRegion  [*Product]
 */

Mast.define('SomeComponent', function() {
	
	return {


		/**
		 * DOM Events
		 */

		events: {

			/**
			 * @param  {$.Event} e
			 * @context Mast.Component
			 */
			'click .someselector': function (e) {

			}
		},




		/**
		 * `afterRender`
		 * 
		 * Runs any time this component is appended to a region.
		 *
		 * @context Mast.Component
		 */

		afterRender: function() {
			
		}

	};
});

```



## Example Factory Model

An instantiated model made with Mast.Model.factory([optionalDefinition]).

It's just an instance of a Backbone.Model, with an extra `schema` property for convenience.  Handy for most standard things you do w/ lone models (i.e. a `Session`).


Construct

```javascript
Mast.Account = Mast.Model.factory({
	attributes: {
		name: '',
		email: ''
	}
});

// Mast.Account is an instantiated Backbone.Model.
```

Access the schema (default attributes)
```javascript
var attributes = Mast.Account.schema;
// `attributes` === the defaults you passed in
```



Access the raw Backbone.Model constructor:
```javascript
var AccountConstructor = Mast.Account.constructor;
var jorgesAccount = new AccountConstructor({
	name: 'jorge'
});
```


Construct a new lone instance of a model:
```javascript
var jorgesAccount = new Mast.Accounts.model({
	name: 'jorge'
})
```






## Example Factory Collection

An instantiated collection made with Mast.Collection.factory([optionalDefinition]).

It's just an instance of a Backbone.Collection, with an extra `schema` property for convenience.  Handy for most standard things you do w/ collections.


Construct

```javascript
Mast.Accounts = Mast.Collection.factory({
	attributes: {
		name: '',
		email: ''
	}
});

// Mast.Accounts is an instantiated Backbone.Collection.
```


Access the schema (default attributes)

```javascript
var attributes = Mast.Accounts.schema;
// `attributes` === the defaults you passed in
```



Access the raw Backbone.Model constructor:
```javascript
var AccountConstructor = Mast.Accounts.constructor;
var jorgesAccount = new AccountConstructor({
	name: 'jorge'
});
```


Access the raw Backbone.Collection constructor:
```javascript
var AccountsConstructor = Mast.Accounts.constructor;
var accountsToDelete = new AccountsConstructor([{}, {}]);
```


Construct a lone instance of a model:
```javascript
var jorgesAccount = new Mast.Accounts.model({
	name: 'jorge'
})
```
