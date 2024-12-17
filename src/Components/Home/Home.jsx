import './Home.css';
import React from 'react';

function Head() {
    return (
      <head>
        <title>EF Supplies</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="style.css" />
        </head>
    )
  }
  
  function MHeader() {
    return (
      <section id="header">
  
          <h1><a href="index.html">EF Supplies</a></h1>
  
          <nav id="nav">
            <ul>
              <li class="current"><a href="index.html">Home</a></li>
              <li><a href="">Page 1</a></li>
              <li><a href="">Page 2</a></li>
              <li><a href="">Page 3</a></li>
            </ul>
          </nav>
  
          <section id="banner">
            <header>
              <h2>Hello. This is EF Supplies.</h2>
              <p>A place for all your needs</p>
            </header>
          </section>
  
          <section id="intro" class="container">
            <div class="row">
              <div class="col-4 col-12-medium">
                <section class="first">
                  <a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
                  <header>
                    <h2>Bundle 1</h2>
                  </header>
                  <p>Bundle 1 offer Blah Blah Blah...</p>
                </section>
              </div>
              <div class="col-4 col-12-medium">
                <section class="middle">
                  <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
                  <header>
                    <h2>Bundle 2</h2>
                  </header>
                  <p>Bundle 2 offer Blah Blah Blah...</p>
                </section>
              </div>
              <div class="col-4 col-12-medium">
                <section class="last">
                  <a href="#" class="image featured"><img src="images/pic04.jpg" alt="" /></a>
                  <header>
                    <h2>Bundle 3</h2>
                  </header>
                  <p>Bundle 3 offer Blah Blah Blah...</p>
                </section>
              </div>
            </div>
            <footer>
              <ul class="actions">
                <li><a href="." class="button large">Get Started</a></li>
                <li><a href="#" class="button alt large">Learn More</a></li>
              </ul>
            </footer>
          </section>
  
      </section>
    )
  }

const Home = () => {
    return (
        <section id="main">
        <div class="container">
          <div class="row">
            <div class="col-12">
            <MHeader></MHeader>
                <section>
                  <header class="major">
                    <h2>Our Products</h2>
                  </header>
                  <div class="row">
                    <div class="col-4 col-6-medium col-12-small">
                      <section class="box">
                        <a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
                        <header>
                          <h3>Product 1</h3>
                        </header>
                        <p>Something about the product I guess</p>
                        <footer>
                          <ul class="actions">
                            <li><a href="#" class="button alt">Find out more</a></li>
                          </ul>
                        </footer>
                      </section>
                    </div>
                    <div class="col-4 col-6-medium col-12-small">
                      <section class="box">
                        <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
                        <header>
                          <h3>Product 2</h3>
                        </header>
                        <p>Something about the product I guess</p>
                        <footer>
                          <ul class="actions">
                            <li><a href="#" class="button alt">Find out more</a></li>
                          </ul>
                        </footer>
                      </section>
                    </div>
                    <div class="col-4 col-6-medium col-12-small">
                      <section class="box">
                        <a href="#" class="image featured"><img src="images/pic04.jpg" alt="" /></a>
                        <header>
                          <h3>Product 3</h3>
                        </header>
                        <p>Something about the product I guess</p>
                        <footer>
                          <ul class="actions">
                            <li><a href="#" class="button alt">Find out more</a></li>
                          </ul>
                        </footer>
                      </section>
                    </div>
                    <div class="col-4 col-6-medium col-12-small">
                      <section class="box">
                        <a href="#" class="image featured"><img src="images/pic05.jpg" alt="" /></a>
                        <header>
                          <h3>Product 4</h3>
                        </header>
                        <p>Something about the product I guess</p>
                        <footer>
                          <ul class="actions">
                            <li><a href="#" class="button alt">Find out more</a></li>
                          </ul>
                        </footer>
                      </section>
                    </div>
                    <div class="col-4 col-6-medium col-12-small">
                      <section class="box">
                        <a href="#" class="image featured"><img src="images/pic06.jpg" alt="" /></a>
                        <header>
                          <h3>Product 5</h3>
                        </header>
                        <p>Something about the product I guess</p>
                        <footer>
                          <ul class="actions">
                            <li><a href="#" class="button alt">Find out more</a></li>
                          </ul>
                        </footer>
                      </section>
                    </div>
                    <div class="col-4 col-6-medium col-12-small">
                      <section class="box">
                        <a href="#" class="image featured"><img src="images/pic07.jpg" alt="" /></a>
                        <header>
                          <h3>Product 6</h3>
                        </header>
                        <p>Something about the product I guess</p>
                        <footer>
                          <ul class="actions">
                            <li><a href="#" class="button alt">Find out more</a></li>
                          </ul>
                        </footer>
                      </section>
                    </div>
                  </div>
                </section>
    
            </div>
            <div class="col-12">
    
                <section>
                  <header class="major">
                    <h2>Something</h2>
                  </header>
                  <div class="row">
                    <div class="col-6 col-12-small">
                      <section class="box">
                        <a href="#" class="image featured"><img src="images/pic08.jpg" alt="" /></a>
                        <header>
                          <h3>Something Something</h3>
                          <p>Something Something Something Something</p>
                        </header>
                        <p>Something Something Something Something Something Something</p>
                        <footer>
                          <ul class="actions">
                            <li><a href="#" class="button icon solid fa-file-alt">Something</a></li>
                            <li><a href="#" class="button alt icon solid fa-comment">Something</a></li>
                          </ul>
                        </footer>
                      </section>
                    </div>
                    <div class="col-6 col-12-small">
                      <section class="box">
                        <a href="#" class="image featured"><img src="images/pic09.jpg" alt="" /></a>
                        <header>
                          <h3>Something Something</h3>
                          <p>Something Something Something Something</p>
                        </header>
                        <p>Something Something Something Something Something Something</p>
                        <footer>
                          <ul class="actions">
                            <li><a href="#" class="button icon solid fa-file-alt">Something</a></li>
                            <li><a href="#" class="button alt icon solid fa-comment">Something</a></li>
                          </ul>
                        </footer>
                      </section>
                    </div>
                  </div>
                </section>
    
            </div>
          </div>
        </div>
      </section>
    );
};

export default Home;