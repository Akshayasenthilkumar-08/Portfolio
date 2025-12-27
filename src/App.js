import "./App.css";
import BottomNav from "./BottomNav";
import img from "./pic.png";
import pic from './assests/craftp.jpg'
import file from './assests/eternal.png'
import file2 from './assests/Blood.png'



function App() {
  return (
    <>
      {/* NAVBAR */}
      <BottomNav/>

      <div className="particles">
  {Array.from({ length: 40 }).map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`
      }}
    />
  ))}
</div>


      {/* HERO */}
<section id="home" className="hero">
  <div className="hero-content">
    <div className="pic">
          <div className="avatar">👩‍💻</div>
    </div>
    <div className="hero-contents">
      <h1 class="hero-title">
  Hi, I'm <span class="word">Akshaya Senthilkumar</span>
</h1>
 <div class="role-container">
 <span class="bracket">&lt;</span>

  <div class="role-wrapper">
    <ul class="role-list">
      <li>Software Developer</li>
      <li>IT Graduate</li>
      <li>Frontend Developer</li>
    </ul>
  </div>

   <span class="bracket">/&gt;</span>
</div>
 <p>
      Passionate about building clean UI and scalable web applications.
    </p>

    <div className="buttons">
  <a href="#contact" className="btn primary">
    Contact Me
    <span className="star s1">✦</span>
    <span className="star s2">✦</span>
    <span className="star s3">✦</span>
    <span className="star s4">✦</span>
    <span className="star s5">✦</span>
  </a>

  <a href="#projects" className="btn secondary">
    View Projects
    <span className="star s1">✦</span>
    <span className="star s2">✦</span>
    <span className="star s3">✦</span>
    <span className="star s4">✦</span>
    <span className="star s5">✦</span>
  </a>
</div>
    </div>
  </div>
</section>


      {/* ABOUT */}
    <section id="about" className="about-section">
  
  {/* TOP WINDOW BAR */}
  <div className="about-window-bar">
    <div className="window-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="window-line"></div>
  </div>

  <div className="about-container">

    <div className="about-text">
      <h2>Who I am</h2>

      <p>
        My name is <strong>Akshaya S</strong>. I’m an IT graduate with a strong interest
        in web development and problem solving. I enjoy building clean, responsive,
        and user-friendly web applications.
      </p>

      <p>
        I have hands-on experience with HTML, CSS, JavaScript, and React.js, and I’ve
        built real-world projects like a Movie Finder App, Currency Converter, and a
        Rail Ticket Booking system.
      </p>
    </div>

    <div className="about-illustration">
      <img src={img} alt="Developer Illustration" />
    </div>

  </div>
</section>

<section id="skills" className="skills-marquee-section">
  <h2 className="skills-title">
    Professional Skillset
  </h2>

  <div className="marquee">
    <div className="marquee-track">
      
      {/* SET 1 */}
      
      <div className="skill-card">
        <img src="https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg" alt="" />
      <h4>HTML</h4> </div>
      <div className="skill-card">
                <img src="https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273750.png" alt="" />
<h4>Node JS</h4></div>
      <div className="skill-card">
        <img src="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg" alt="" />
        <h4>JavaScript</h4></div>
      <div className="skill-card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="" />
<h4>CSS</h4></div>
      <div className="skill-card">
        <img src="https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg" alt="" />
       <h4>React</h4> </div>
      <div className="skill-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRed0RY26tC5OEljK4JwZk0EwgOtobEmEQXZg&s" alt="" />
       <h4>Mongo DB</h4> </div>

      {/* SET 2 (duplicate for infinite scroll) */}
    <div className="skill-card">
      <img src="https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg" alt="" />
      <h4>HTML</h4>
    </div>
      <div className="skill-card">
                  <img src="https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273750.png" alt="" />
<h4>Node JS</h4>
      </div>
      <div className="skill-card">
        <img src="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg" alt="" />
        <h4>JavaScript</h4>
      </div>
      <div className="skill-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="" />
<h4>CSS</h4>
      </div>
      <div className="skill-card">
          <img src="https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg" alt="" />
       <h4>React</h4>
      </div>
      <div className="skill-card">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRed0RY26tC5OEljK4JwZk0EwgOtobEmEQXZg&s" alt="" />
       <h4>Mongo DB</h4>
      </div>

    </div>
  </div>
</section>


      {/* PROJECTS */}
<div id="projects" className=" prodark">
  <h2>Projects</h2>

  <div className="cards project-ui">

    {/* CARD 1 */}
     <div className="card railway-card">
  <div className="h3">
 <h3>BLOOD BANK MANAGEMENT</h3>
  </div>
  <div className="imgs">
    <img
    src={file2}
      alt="train"
    />
  </div>
  <div className="railway-content">
    <p>
     Blood Bank System – A simple web app to view blood availability and manage donor and blood requests efficiently using Firebase.
    </p>
  </div>
 <div className="railway-actions">
  <a
    href="https://akshayasenthilkumar-08.github.io/Blood-Bank/"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    ▶
  </a>

  {/* Source Code */}
  <a
    href="https://github.com/Akshayasenthilkumar-08/Blood-Bank"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    {"</>"}
  </a>
</div>

  <div className="railway-tech">
    React<br/>
    JavaScript<br/>
    JS<br/>
    Firebase<br/>
  </div>
</div>
 <div className="card railway-card">
  <div className="h3">
 <h3>RAILWAY TICKET BOOKING</h3>
  </div>
  <div className="imgs">
    <img
    src="https://images.pexels.com/photos/1548693/pexels-photo-1548693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="train"
    />
  </div>
  <div className="railway-content">
    <p>
      A dynamic JavaScript web application that enables users to search trains, select seats, make bookings and view
PNR status via client-side logic
    </p>
  </div>
 <div className="railway-actions">
  <a
    href="https://akshayasenthilkumar-08.github.io/Rail-Ticket-Booking/"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    ▶
  </a>

  {/* Source Code */}
  <a
    href="https://github.com/Akshayasenthilkumar-08/Rail-Ticket-Booking"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    {"</>"}
  </a>
</div>

  <div className="railway-tech">
    Javascript ,Local storage<br />  CSS <br></br> Html
  </div>
</div>

<div className="card railway-card">
  <div className="h3">
 <h3>MOVIE FINDER APP</h3>
  </div>
  <div className="imgs">
    <img
    src="https://play-lh.googleusercontent.com/1lvMzyPJOqpOXIkyVVI1uYPbMHHZyAo5THvmfBMbYWM-mdGzhX6nb-UKv6b6gMo9EZk=w240-h480-rw"
      alt="train"
    />
  </div>
  <div className="railway-content">
    <p>
    A JavaScript-based web application to search, view, and explore movies using OMDb/TMDB API with dynamic
search, poster display, and responsive UI
    </p>
  </div>
 <div className="railway-actions">
  <a
    href="https://akshayasenthilkumar-08.github.io/Movie-Finder-App/"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    ▶
  </a>

  {/* Source Code */}
  <a
    href="https://github.com/Akshayasenthilkumar-08/Movie-Finder-App.git"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    {"</>"}
  </a>
</div>

  <div className="railway-tech">
    Javascript,Local storage  <br></br> API <br/>React
  </div>
</div>

 <div className="card railway-card">
  <div className="h3">
 <h3>CURRENCY CONVERTER
</h3>
  </div>
  <div className="imgs">
    <img
    src="https://media.istockphoto.com/id/483424683/photo/euro-and-dollar-symbol-eur-usd-pair.jpg?s=612x612&w=0&k=20&c=sxpJ59whk1IQbv2O22UE0zYEmZ9zZA76-iJBsrsAa_I="
      alt="train"
    />
  </div>
  <div className="railway-content">
    <p>
   A responsive React web app that converts real-time currency values using exchange rate APIs with dynamic
input validation and modern UI.
    </p>
  </div>
 <div className="railway-actions">
  <a
    href="https://akshayasenthilkumar-08.github.io/Currency-Converter/"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    ▶
  </a>

  {/* Source Code */}
  <a
    href="https://github.com/Akshayasenthilkumar-08/Currency-Converter/settings/pages"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    {"</>"}
  </a>
</div>

  <div className="railway-tech">
    Javascript,Local storage <br />  API <br></br> Html
  </div>
</div>
<div className="card railway-card">
  <div className="h3">
 <h3>CRAFTO PROJECT
</h3>
  </div>
  <div className="imgs">
    <img
    src={pic}
      alt="train"
    />
  </div>
  <div className="railway-content">
    <p>
 Crafto Project is a responsive jewellery e-commerce website showcasing modern UI design, product listings, and user-friendly layout. Built to demonstrate front-end web development.
    </p>
  </div>
 <div className="railway-actions">
  <a

      href="https://akshayasenthilkumar-08.github.io/Crafto-Project/"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    ▶
  </a>

  {/* Source Code */}
  <a
      href="https://github.com/Akshayasenthilkumar-08/Crafto-Project"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    {"</>"}
  </a>
</div>

  <div className="railway-tech">
  HTML  <br></br> CSS
  </div>
</div>
<div className="card railway-card">
  <div className="h3">
 <h3>ETERNAL PROJECT
</h3>
  </div>
  <div className="imgs">
    <img
    src={file}
      alt="train"
    />
  </div>
  <div className="railway-content">
    <p>
Eternal Project is a clean, modern multi-section landing page showcasing services, portfolio items, and team information with a responsive layout.    </p>
  </div>
 <div className="railway-actions">
  <a
      href="https://akshayasenthilkumar-08.github.io/Eternal-Project/"
   
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    ▶
  </a>

  {/* Source Code */}
  <a
 href="https://github.com/Akshayasenthilkumar-08/Eternal-Project"
    target="_blank"
    rel="noopener noreferrer"
    className="action-btn"
  >
    {"</>"}
  </a>
</div>

  <div className="railway-tech">
  HTML  <br></br> CSS
  </div>
</div>
  </div>
</div>

      {/* CONTACT */}
     <section className="contact-section" id="contact">
  <div className="contact-wrapper">

    {/* LEFT – FORM */}
    <div className="contact-form">
    <div className="nebula-input">
  <input
    type="text"
    className="input"
    placeholder=" "
    autoComplete="off"
  />
  <label className="user-label">Name</label>

  <div className="nebula-particle" style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }} />
  <div className="nebula-particle" style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }} />
  <div className="nebula-particle" style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }} />
  <div className="nebula-particle" style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }} />
  <div className="nebula-particle" style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }} />
  <div className="nebula-particle" style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }} />
</div>


       <div className="nebula-input">
  <input
    type="text"
    className="input"
    placeholder=" "
    autoComplete="off"
  />
  <label className="user-label">Mail ID</label>

  <div className="nebula-particle" style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }} />
  <div className="nebula-particle" style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }} />
  <div className="nebula-particle" style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }} />
  <div className="nebula-particle" style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }} />
  <div className="nebula-particle" style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }} />
  <div className="nebula-particle" style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }} />
</div>

   <div className="nebula-input nebula-textarea">
  <textarea
    className="input textarea"
    placeholder=" "
    autoComplete="off"
    rows="4"
  ></textarea>

  <label className="user-label">Message</label>

  <div className="nebula-particle" style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }} />
  <div className="nebula-particle" style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }} />
  <div className="nebula-particle" style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }} />
  <div className="nebula-particle" style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }} />
  <div className="nebula-particle" style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }} />
  <div className="nebula-particle" style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }} />

   <button className="send">
  <span></span>
  <span></span>
  <span></span>
  <span></span> Send
</button>
</div>


    </div>

    {/* RIGHT – INFO */}
    <div className="contact-info">
      <div className="info-row">
        <span>@</span>
        <p>itaakshayas@gmail.com</p>
      </div>


      <div className="info-row">
        <span>📞</span>
        <p>+91 9344528302</p>
      </div>

    

      <div className="socials">
        <a href="https://www.linkedin.com/in/akshaya-s-it/">
        <img src="https://i.pinimg.com/736x/2d/6f/cb/2d6fcb4ffd51802b261abd7e0d5d2b05.jpg" alt="" />
        
        </a>
        <a href="https://github.com/Akshayasenthilkumar-08">
        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
        </a>
      </div>
    </div>

  </div>
</section>


      {/* FOOTER */}
      <footer>
        <p>© 2025 Akshaya. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
