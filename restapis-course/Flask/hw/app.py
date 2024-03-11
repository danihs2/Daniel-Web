from flask import Flask 

app = Flask(__name__) # Crea un objeto de la clase Flask y lo asigna a la variable app

@app.route('/') # Decorador que indica la ruta de la URL 

def index():
    return 'Hola mundo'

if __name__ == '__main__':
    app.run() # Inicia el servidor web