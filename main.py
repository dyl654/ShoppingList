import cherrypy

class Server(object):
    def __init__(self):
        self.users = UserRepository()
    @cherrypy.expose
    def index(self):
        return "Hello World!"
    @cherrypy.expose
    @cherrypy.tools.json_out()
    def logIn(self, username, password):
        success = self.users.canLogIn(username, password)
        if(success):
            cherrypy.session["username"] = username
        return success
    @cherrypy.expose
    def logOut(self):
        del cherrypy.session["username"]
    @cherrypy.expose
    def getUsername(self):
        if("username" in cherrypy.session):
            return cherrypy.session["username"]
        else:
            return ""
    @cherrypy.expose
    def addUser(self, username, password):
        self.users.addLogIn(username, password)
class UserRepository(object):
    def __init__(self):
        self.data = [('dylan', 'dylan')]
    def canLogIn(self, username, password):
        for (u,p) in self.data:
            if(u == username and p == password):
                return True
        return False
    def addLogIn(self, username, password):
        self.data.append((username, password))

if __name__ == '__main__':
    cherrypy.tree.mount(None, '/', "public.conf")
    cherrypy.quickstart(Server(),"/api", "server.conf")
