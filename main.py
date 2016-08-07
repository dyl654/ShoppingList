import cherrypy

class HelloWorld(object):
    @cherrypy.expose
    def index(self):
        return "Hello World!"

if __name__ == '__main__':
    cherrypy.tree.mount(None, '/', "public.conf")
    cherrypy.quickstart(HelloWorld(),"/api", "server.conf")
