import './App.css';
import cyberSportImg from './static/img/cybersport_06.jpg';
import './static/css/style.css';
import logoImg from './static/img/stream.png';

function App() {
  return (
    <>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Streamplay: Sign in</title>
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alice&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/4fa898188f.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <nav class="nav navbar">
          <img src={logoImg} alt="logo" class="heading"/>
          <a href="signup.html"><button class="signup btn btn-outline-primary btn-md">Sign up</button></a>
        </nav>
        <div class="row">
          <div class="div1 col-lg-6">
            <img class="image1" src={cyberSportImg} alt="image" />
          </div>
          <div class="div2 col-lg-6">
            <h1 class="text1">Experience the world through a new lens.</h1>
            <form action="">
              <i class="fa-solid fa-user"></i>
              <input type="text" class="username" placeholder="Username" />
              <br />
              <i class="fa-solid fa-lock"></i>
              <input type="password" class="password" placeholder="Password" />
              <br />
              <button class="signin btn btn-primary btn-md">Sign in</button>
            </form>
          </div>
          
        </div>
      </body>
    </html>
    </>
  );
}

export default App;
