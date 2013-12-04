Journalapp::Application.routes.draw do
  resources :posts
  root :to => "staticpages#root"
end
