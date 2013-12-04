Journalapp.Routers.PostRouter = Backbone.Router.extend({
	initialize: function ($content) {
		this.$content = $content;
	},

	routes: {
		"": "showPostsIndex",
		"posts/new": "newPost",
		"posts/:id": "showPost",
		"posts/:id/edit": "editPost"
	},

	showPostsIndex: function () {
		$("#errors").empty();
		this.$content.html("<div class='create'><a href='#/posts/new'>Create Post</a></div>");
	},

	newPost: function () {
		$("#errors").empty();
		var newPost = new Journalapp.Models.Post;
		var newPostView = new Journalapp.Views.NewPost({
			model: newPost,
			collection: Journalapp.posts
		});
		this.$content.html(newPostView.render().$el);
	},

	showPost: function (id) {
		$("#errors").empty();
		var showPostView = new Journalapp.Views.PostShow({
			model: Journalapp.posts.get(id)
		})
		this.$content.html(showPostView.render().$el);
	},

	editPost: function (id) {
		$("#errors").empty();
		var editPostView = new Journalapp.Views.NewPost({
			model: Journalapp.posts.get(id)
		});
		this.$content.html(editPostView.render().$el);
	}

});