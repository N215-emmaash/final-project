// MVC = this is the model that the controller is pulling from. 


// This information simulates getting data from a database ( this is the data)
// Nav Bar
var homeContent = `
<div class="home-hero">
<div class="hero-text">
  <p class="hero-text-line1">Header goes here</p>
  <p class="hero-text-line2">Less important text goes here</p>
  <p class="hero-text-line3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
    aliquid minus nemo sed est.
  </p>

  <div class="read-more-button">
    <a href="#">READ MORE</a>
  </div>
</div>
</div><div class="home-testimonials">
<p class="home-test-p1">
  “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab
  illo inventore veritatis et quasi architecto beatae vitae dicta sunt
  explicabo. Iste natus error sit voluptatem accusantium doloremque
  laudantium totam rem aperiam eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo”
</p>
<p class="home-person">John Smith</p>
<p class="home-job-title">Corporation CEO, books author.</p>
</div>

<div class="home-events">
<div class="event-title">
  <p class="upcoming">Upcoming Events:</p>
  <hr class="hl" />
</div>
<div class="event-dates">
  <div class="dates">
    <div class="date-box">
      <h1>06</h1>
      <h2>JUN</h2>
    </div>
    <div class="date-text">
      <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
      <p class="bottom-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
  <div class="dates">
    <div class="date-box">
      <h1>30</h1>
      <h2>JUL</h2>
    </div>
    <div class="date-text">
      <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
      <p class="bottom-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
  <div class="dates">
    <div class="date-box">
      <h1>30</h1>
      <h2>AUG</h2>
    </div>
    <div class="date-text">
      <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
      <p class="bottom-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
  <div class="dates">
    <div class="date-box">
      <h1>23</h1>
      <h2>NOV</h2>
    </div>
    <div class="date-text">
      <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
      <p class="bottom-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
  <div class="dates">
    <div class="date-box">
      <h1>23</h1>
      <h2>DEC</h2>
    </div>
    <div class="date-text">
      <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
      <p class="bottom-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid temporibus quos aspernatur
      </p>
    </div>
  </div>
</div>
</div>`;
var aboutContent = `  <div class="about-header"></div>
<div class="about-title">
  <p class="upcoming">Our History:</p>
  <hr class="hl" />
</div>
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
  illo inventore veritatis et quasi architecto beatae vitae dicta sunt
  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
  voluptatem.
</p>`;
var galleryContent = `<div class="gallery-title">
<p class="upcoming">Gallery:</p>
<hr class="hl" />
</div>
<div class="gallery-images">
<div class="row1">
  <a href="#gallery1"><div class="gallery-img1"></div></a>
  <a href="#gallery2"><div class="gallery-img2"></div></a>
  <a href="#gallery3"> <div class="gallery-img3"></div></a>
</div>
<div class="row2">
  <a href="#gallery4"><div class="gallery-img4"></div></a>
  <a href="#gallery5"><div class="gallery-img5"></div></a>
</div>
</div>`;
var blogContent = `<div class="blog-title">
<p class="upcoming">Blog:</p>
<hr class="hl" />
</div>
<div class="blog-container">
<div class="blog-row1">
  <a href="#blog1"
    ><div class="blog">
      <div class="date-box">
        <h1>06</h1>
        <h2>JUN</h2>
      </div>
      <div class="date-text">
        <div class="blog-img"></div>
        <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottom-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div></a
  >
  <a href="#blog2"
    ><div class="blog">
      <div class="date-box">
        <h1>30</h1>
        <h2>JUL</h2>
      </div>
      <div class="date-text">
        <div class="blog-img"></div>
        <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottom-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div></a
  >
</div>
<div class="blog-row1">
  <a href="#blog3"
    ><div class="blog">
      <div class="date-box">
        <h1>30</h1>
        <h2>AUG</h2>
      </div>
      <div class="date-text">
        <div class="blog-img"></div>
        <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottom-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div></a
  >
  <a href="#blog4"
    ><div class="blog">
      <div class="date-box">
        <h1>23</h1>
        <h2>NOV</h2>
      </div>
      <div class="date-text">
        <div class="blog-img"></div>
        <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottom-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div></a
  >
</div>
<div class="blog-row1">
  <a href="#blog5"
    ><div class="blog">
      <div class="date-box">
        <h1>23</h1>
        <h2>DEC</h2>
      </div>
      <div class="date-text">
        <div class="blog-img"></div>
        <p class="top-text">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottom-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div></a
  ><a href="#"><div class="blank-box"></div></a>
</div>
</div>`;
var contactContent = ` <div class="contact">
<div class="contact-title">
  <p>Contact Us:</p>
  <hr />
</div>

<div class="contact-box">
  <div class="contact-content-left">
    <div>
      <input placeholder="Your name..." type="text" />
    </div>
    <divs>
      <input placeholder="Email Address..." type="text" />
    </divs>
    <div>
      <input placeholder="Company..." type="text" />
    </div>
    <div>
      <input id="textarea" placeholder="Message..." type="text" />
    </div>
    <div class="contact-read-button">
      <a href="#">Send Message</a>
    </div>
  </div>

  <div class="contact-content-right">
    <img class="contact-map" src="images/map.jpg" alt="" />
  </div>
</div>
</div>`;

// Gallery Pages
var gallery1Content = `  <div class="gallery-header">
<div class="galText1">
  <p class="gal-text-1">1.</p>
  <p class="gal-text-2">food festival</p>
</div>
</div>

<div class="gallery-text">
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
</div>`;
var gallery2Content = `  <div class="gallery-header2">
<div class="galText2">
  <p class="gal-text-1">2.</p>
  <p class="gal-text-2">dee jay</p>
</div>
</div>

<div class="gallery-text">
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
</div>`;
var gallery3Content = `<div class="gallery-header3">
<div class="galText3" >
  <p class="gal-text-1">3.</p>
  <p class="gal-text-2">speech</p>
</div>
</div>

<div class="gallery-text">
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
</div>`;
var gallery4Content = `  <div class="gallery-header4">
<div class="galText4">
  <p class="gal-text-1">4.</p>
  <p class="gal-text-2">open foodfest</p>
</div>
</div>

<div class="gallery-text">
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
</div>`;
var gallery5Content = `<div class="gallery-header5">
<div class="galText5">
  <p class="gal-text-1">5.</p>
  <p class="gal-text-2">international</p>
</div>
</div>

<div class="gallery-text">
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
<p class="about-p">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam
  aliquam quaerat voluptatem.
</p>
</div>`;

// Blog Pages
var blog1Content =`<div class="blog-header">
<div class="blog-box-big">
  <h1>06</h1>
  <h2>JUN</h2>
</div>
</div>
<div class="blog-text">
<h1>Header #1:</h1>
<p>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
<h1>Header #2:</h1>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>`;
var blog2Content =`<div class="blog-header">
<div class="blog-box-big">
  <h1>30</h1>
  <h2>JUL</h2>
</div>
</div>
<div class="blog-text">
<h1>Header #1:</h1>
<p>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
<h1>Header #2:</h1>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>`;
var blog3Content =`<div class="blog-header">
<div class="blog-box-big">
  <h1>30</h1>
  <h2>AUG</h2>
</div>
</div>
<div class="blog-text">
<h1>Header #1:</h1>
<p>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
<h1>Header #2:</h1>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>`;
var blog4Content =`<div class="blog-header">
<div class="blog-box-big">
  <h1>23</h1>
  <h2>NOV</h2>
</div>
</div>
<div class="blog-text">
<h1>Header #1:</h1>
<p>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
<h1>Header #2:</h1>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>`;
var blog5Content =`<div class="blog-header">
<div class="blog-box-big">
  <h1>23</h1>
  <h2>DEC</h2>
</div>
</div>
<div class="blog-text">
<h1>Header #1:</h1>
<p>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
<h1>Header #2:</h1>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>`;





// this fuction is being called from the app.js and it has the page name

export function modelPageName (pgName){
    console.log(pgName);

    $("#app").html(eval(pgName));

    if(pgName == "homeContent"){
        $("nav a").removeClass("blue-text").addClass("white-text");
        $("hr").removeClass("black-line").addClass("white-line");
        $("img").removeClass("black-logo").addClass("white-logo");
       
      } else{
        $("nav a").removeClass("white-text").addClass("blue-text");
        $("hr").removeClass("white-line").addClass("black-line");
        $("img").removeClass("white-logo").addClass("black-logo");
        
      }
  
      try{
        eval(pgName);
        $("#app").html(eval(pgName));
      } catch (e) {
        console.log("hello", e);
      }
}





