import cherrypy
ingredients = ["cheese"]

class HelloWorld(object):
    @cherrypy.expose
    @cherrypy.tools.json_out()
    def index(self):
        return ingredients
    @cherrypy.expose
    def add(self, i):
        ingredients.append(i)

if __name__ == '__main__':
    cherrypy.tree.mount(None, '/', "public.conf")
    cherrypy.quickstart(HelloWorld(),"/api", "server.conf")
