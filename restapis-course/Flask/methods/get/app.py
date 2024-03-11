from flask import Flask, jsonify
# jsonify is used to convert a list of dictionaries to a JSON object

app = Flask(__name__)

frameworks = [
    {
        'id': 1,
        'name': 'Flask'
    },
    {
        'id': 2,
        'name': 'ExpressJS'
    },
    {
        'id': 3,
        'name': 'Django'
    }
]

@app.route('/') # GET request
def index():
    return 'Hello, World!'

@app.route('/api/frameworks/', methods=['GET']) # GET request
def get_frameworks():
    return jsonify(frameworks)

@app.route('/api/frameworks/<string:name>') # GET request with parameter
def get_framework_by_name(name):
    framework = []
    for f in frameworks:
        if f['name'] == name:
            framework.append(f)
    return jsonify(framework[0]) # returns the first framework that matches the name

if __name__ == '__main__':
    app.run(debug=True) # permite que o servidor seja reiniciado automaticamente sempre que o código for alterado