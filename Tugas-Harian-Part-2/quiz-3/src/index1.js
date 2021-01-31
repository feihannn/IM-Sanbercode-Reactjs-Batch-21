import React, {useState, useEffect} from 'react';
import axios from 'axios'
const Home = () => {  
    const [daftarBuku, setdaftarBuku] =  useState(null)
    useEffect( () => {
        if (daftarBuku === null){
          axios.get(`http://backendexample.sanbercloud.com/api/books`)
          .then(res => {
            setdaftarBuku(res.data.map(el=>{ return {id: el.id, title: el.title, description: el.description, review: el.review, release_year: el.release_year, totalPage: el.totalPage, price: el.price }} ))
          })
        }
      }, [daftarBuku])
      return (
        <div>
        
        <section id="utama">
          <h1>Daftar Buku Pilihan</h1>
          {
                daftarBuku !== null && daftarBuku.map((item, index)=>{
                  return(
                      <article>
                        <h1 style={{textAlign:"left"}}>{item.title}</h1>
                        <div>
                            <img src={item.image_url} style={{float:"left"}}></img>
                        </div>
                        <div>
                            <h5>{item.release_year}</h5>
                            <h5>{item.price}</h5>
                            <h5>{item.totalPage}</h5>
                        </div>
                        
                        <h5>Deskripsi: {item.description}</h5>
                        <h5>Ulasan: {item.review}</h5>
                        <hr></hr>
                      </article>       
                  )
                })
              }
          <div id="article-list">
            <article>
              <br />
              <a href><h3>Lorem Post 1</h3></a>
              <p>
                Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
              </p>
              <hr />
            </article>
           
          </div>
        </section>
      </div>
      
      );
}

export default Home;