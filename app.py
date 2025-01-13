from flask import Flask, request
from flask import render_template
import json
import requests
import os
import dotenv


dotenv.load_dotenv()
app = Flask(__name__)
#CORS(app)

@app.route("/")
def home():
    return render_template("submit.html", 
                           url_apidescriptors = os.getenv("FRONT_END_HOST") + ":"+ os.getenv("FRONT_END_PORT"));
@app.route("/submit")
def submit():
    return render_template("submit.html",
                           url_apidescriptors = os.getenv("FRONT_END_HOST") + ":"+ os.getenv("FRONT_END_PORT"));
@app.route("/about")
def about():
    return render_template("about.html");
@app.route("/contact")
def contact():
    return render_template("contact.html");

@app.route("/apidescriptors", methods=["POST"])
def apidescriptors():
    bytesfile = request.files['files'].read()
    files={ 'file':(request.form['name'], bytesfile) }
    url= "http://" + os.getenv("API") + ":" + os.getenv("API_PORT") + "/descriptors"
    #url= os.getenv("API") + "/descriptors"
    res = requests.post( url, files=files)
    
    return json.loads(res.text);
if __name__ == '__main__':
    debug = False
    if os.getenv("FRONT_END_DEBUG") == "True":
        debug = True
    app.run(host=os.getenv("FRONT_END_HOST"), port=os.getenv("FRONT_END_PORT"), debug=debug)
