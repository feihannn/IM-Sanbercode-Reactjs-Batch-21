import React from 'react';
import DaftarBuku from './editbuku.js'
function BooksListEditor() {
    return (
      <div>
      <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" />
      <link href="public/css/style.css" rel="stylesheet" type="text/css" />
      <header id="head">
        <img id="logo" src="public/img/logo.png" width="200px" />
        <nav>
          <ul>
            <a href="#" className="menu"><li>Home</li></a>
            <a href="#" className="menu"><li>About</li></a>
            <a href="#" className="menu"><li>Login</li></a>
          </ul>
        </nav>
      </header>
      <section id="utama">
        <DaftarBuku/>
      </section>
      
      
    
    </div>
    
    );
}
export default BooksListEditor;