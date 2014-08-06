### define
jquery : $
backbone : Backbone
lib/uber_router : UberRouter
###

class Router extends UberRouter

  rootSelector : "#main"
  navbarSelector : "#navbar"

  routes :
    "" : "home"

  whitelist : []

  home : ->

    view = new Backbone.View()
    view.render()
    view.$el.html("""<i class="fa fa-check"></i> What up!""")
    @changeView(view)
