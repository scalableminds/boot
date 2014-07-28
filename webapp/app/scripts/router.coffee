### define
jquery : $
backbone : Backbone
lib/uber_router : UberRouter
###

class Router extends UberRouter

  routes :
    "/" : "home"

  whitelist : []

  home : ->

    @changeView(new Backbone.View())
