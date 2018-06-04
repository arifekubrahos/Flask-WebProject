from flask import Flask, render_template, request, redirect, url_for
import json

app = Flask(__name__)


@app.route("/", methods= ['POST', 'GET'])
def api():
    # default olarak get methodu çalışacak orası bizim anasayfamız olacak
    if request.method == 'GET':
        return render_template('basepage.html')

    #kullanıcı kelimeyi yazıp submite bastığında post methodu tetiklenecek ve sayfa değişecek (şimdilik)
    else:
        user_word = request.form['userword']
        #return redirect(url_for('kelime',word=user_word ))
        return render_template("basepage.html",computeword="naber")



if __name__ == '__main__':
    app.run(debug=True, port=3453)