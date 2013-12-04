Journalapp.Views.PostShow = Backbone.View.extend({
	template: JST["posts/show"],
	
	events: {
		"click .delete": "deletePost",
		"click .edit": "editPost"
	},

	render: function () {
		var renderedContent =	this.template({
			post: this.model
		});
		this.$el.html(renderedContent);
		return this;
	},
	
	deletePost: function (event) {
		var formid = parseInt($(event.currentTarget).attr('data-id'));
		this.$el.html("");
		Journalapp.posts.get(formid).destroy({
			success: function () {
				Backbone.history.navigate("/", { trigger: true });
			}
		});
	},

	editPost: function (event) {
		var formid = parseInt($(event.currentTarget).attr('data-id'));
		Backbone.history.navigate("#/posts/" + formid + "/edit", { trigger: true });
	}
	
});