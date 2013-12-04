Journalapp.Views.NewPost = Backbone.View.extend({
	template: JST["posts/new"],

	events: {
		"submit form": "submitForm"
	},

	render: function () {
		var renderedContent = this.template({
			collection: Journalapp.posts,
			post: this.model
		});
		this.$el.html(renderedContent);

		return this;
	},

	submitForm: function (event) {
		event.preventDefault();
		var that = this;
		var formData = $(event.currentTarget).serializeJSON();
		this.model.set(formData.post);
		if (this.model.isNew() && this.model.validation()) {
			this.collection.create(formData.post, {
				wait: true,
				success: function () {
					var postid = that.collection.last().id;
					Backbone.history.navigate("#/posts/" + postid, { trigger: true });
				}
			});
		}
		else {
			var postid = this.model.id;
			this.model.save({}, {
				success: function () {
					Backbone.history.navigate("#/posts/" + postid, { trigger: true });
				},
				error: function (post, responses) {
					$("#errors").html("");
					responses.responseJSON.forEach( function (error) {
						$("#errors").append("<p>" + error + "!</p>");
					})
				}
			});
		}
	}

});