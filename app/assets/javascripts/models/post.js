Journalapp.Models.Post = Backbone.Model.extend({
	urlRoot: "/posts",
	
	validation: function () {
		var errors = [];
		if (this.get("title").length == 0 || this.get("body").length == 0) {
			return false;
		}
		return true;
	}
});