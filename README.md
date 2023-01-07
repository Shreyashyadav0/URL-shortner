first we created our server in index.js
added middlewares(to accept json and then to make public folder public and then to accept body
then we listen to a port
then we creater diffrent different url
Whatever starts with /url goes to shortURL
whatever starts with / goes to homeRotes
in homes routes we give the path of html so whenever we enter url with / we get the html
 in request.body we send long url that long url get saved with short id and short url get created and send back to frondend
whenever user goes to that short url basicially it is dynamic thing  
with router.post we post the long url then we created a small id using nanoid or math.random we save that
using url.create 
ans then we send back the short url with base url and short url 
we created model named it as model we class called url and extended it to Model indside that 
we called init method in inti we crated out table structure then it require create db and model name 
then we find the shorturl in database anst0corresponding url 
