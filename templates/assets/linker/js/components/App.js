/**
 * `App`
 * Mast.Component
 *
 * @region contentRegion []
 */
Mast.define('App', function() {
	return {

		/**
		 * Navigation
		 */

		// '#': 'contentRegion@home'



		/**
		 * The root scope for this component/view, the attributes
		 * of this model are the variables available in the template
		 * which corresponds with this component.
		 *
		 * This model is automatically cascaded to components
		 * in child regions (available as `this.model`) unless
		 * their model is set explicitly.
		 *
		 * @type {Backbone.Model}
		 */

		model: new Mast.Model(),



		/**
		 * DOM Events
		 * @type {Object}
		 */

		events: {

		},



		/**
		 * `afterRender`
		 *
		 * Runs any time this component is appended to a region.
		 *
		 * (this is the "entry point".)
		 */

		afterRender: function() {

		}


	};
});
