import cherrypy
import json

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
    @cherrypy.tools.json_out()
    def addUser(self, username, password):
        self.users.addLogIn(username, password)
        return True
        
    @cherrypy.expose
    @cherrypy.tools.json_out()
    def isLoggedIn(self):
        return "username" in cherrypy.session
    
    @cherrypy.expose
    @cherrypy.tools.json_out()
    def getdata(self):
        return self.users.loadData('recipes.json')
    
    
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
        
    def loadData(self, newFile):
        with open(newFile) as data_file:
            data = json.load(data_file)
        return data
        

if __name__ == '__main__':
    cherrypy.tree.mount(None, '/', "public.conf")
    cherrypy.quickstart(Server(),"/api", "server.conf")
