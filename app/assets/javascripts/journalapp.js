window.Journalapp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		Journalapp.posts = new Journalapp.Collections.Posts();
		Journalapp.posts.fetch({
			success: function() {
				new Journalapp.Routers.PostRouter($("#content"));
				Backbone.history.start();
			}
		});
		this._installSidebar($("#sidebar"));
  },
	_installSidebar: function ($sidebar) {
		var postIndexView = new Journalapp.Views.PostIndexView({
			collection: Journalapp.posts
		});
		$sidebar.html(postIndexView.render().$el);
	}
};

$(document).ready(function(){
  Journalapp.initialize();
});
