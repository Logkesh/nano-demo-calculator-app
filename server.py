from flask import Flask

app = Flask(__name__)


@app.route("/calculator/greeting", methods=['GET'])
def greeting():
    return 'Greeting Calculator'

@app.route("/calculator/add", methods=['POST'])
def add(a: int, b: int):
    return str(a + b)

@app.route("/calculator/subtract", methods=['POST'])
def subtract():
    return 'Now We do subtract!'

if __name__ == '__main__':
    app.run(port=8080,host='0.0.0.0')
