Journalapp.Views.PostIndexView = Backbone.View.extend({
	template: JST["posts/index"],

	initialize: function () {
		this.listenTo(this.collection, "remove add change:title reset", this.render);
	},

	render: function () {

		var renderedContent = JST["posts/index"]({
			posts: this.collection
		});

		this.$el.html(renderedContent);
		return this;
	}

});
