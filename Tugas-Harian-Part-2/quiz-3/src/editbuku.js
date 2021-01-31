import React, {useState, useEffect} from "react"
import axios from "axios"


const DaftarBuku = () => {  
    const [daftarBuku, setdaftarBuku] =  useState(null)
    const [input, setInput]  =  useState({id: null, title: "", description: "", review: "", release_year: "2020", totalPage: 0, price: 0 ,image_url:""})

  useEffect( () => {
    if (daftarBuku === null){
      axios.get(`http://backendexample.sanbercloud.com/api/books`)
      .then(res => {
        setdaftarBuku(res.data.map(el=>{ return {id: el.id, title: el.title, description: el.description, review: el.review, release_year: el.release_year, totalPage: el.totalPage, price: el.price,image_url:el.image_url }} ))
      })
    }
  }, [daftarBuku])
  
const handleDelete = (event) => {
    let idDataBuku = parseInt(event.target.value)
    let newdaftarBuku = daftarBuku.filter(el => el.id !== idDataBuku)
    setdaftarBuku([...newdaftarBuku])
    axios.delete(`http://backendexample.sanbercloud.com/api/books/${idDataBuku}`)
    .then(res => {
      console.log(res)
    }) 
  }
  
  const handleEdit = (event) =>{
    let idDataBuku = parseInt(event.target.value)  
    axios.get(`http://backendexample.sanbercloud.com/api/books/${idDataBuku}`)
    .then(res => {
      let dataBuku = res.data
      setInput({id: idDataBuku,title: dataBuku.title, description: dataBuku.description, review: dataBuku.review,release_year: dataBuku.release_year,totalPage:dataBuku.totalPage,price:dataBuku.price,image_url:dataBuku.image_url })
    })
  
  }

  const handleChange = (event) =>{
    let typeOfInput = event.target.name
    switch (typeOfInput){
      case "title":
      {
        setInput({...input, title: event.target.value});
        break
      }
      case "description":
      {
        setInput({...input, description: event.target.value});
        break
      }
      case "review":
      {
        setInput({...input, review: event.target.value});
          break
      }
      case "release_year":
        {
            setInput({...input, release_year: event.target.value});
            break
        }
    case "totalPage":
        {
            setInput({...input, totalPage: event.target.value});
            break
        }
    case "price":
        {
            setInput({...input, price: event.target.value});
            break
        }
    case "image":
        {
            setInput({...input, image_url: event.target.value});
            break
        }
    default:
      {break;}
    }
  }

  const handleSubmit = (event) =>{
    // menahan submit
    event.preventDefault()
    let title = input.title
    let description = input.description
    let review = input.review
    let release_year = input.release_year.toString()
    let totalPage = input.totalPage.toString()
    let price = input.price.toString()
    let image=input.image_url
    

    if (input.id === null){        
      axios.post(`http://backendexample.sanbercloud.com/api/books`, {title,description,review,release_year,totalPage,price,image})
      .then(res => {
          setdaftarBuku([
            ...daftarBuku, 
            { id: res.data.id, 
              title,
              description,
              review,
              release_year,
              totalPage,
              price,
              image
            }])
      })
    }else{
      axios.put(`http://backendexample.sanbercloud.com/api/books/${input.id}`, {title,description,review,release_year,totalPage,price,image})
      .then(() => {
          let dataBuku = daftarBuku.find(el=> el.id === input.id)
          dataBuku.title= title
          dataBuku.description = description
          dataBuku.review = review
          dataBuku.release_year = release_year
          dataBuku.totalPage = totalPage
          dataBuku.price = price
          dataBuku.image_url=image
          setdaftarBuku([...daftarBuku])
      })
    }

    // reset input form to default
    setInput({id: null, title: "", description: "", review: "", release_year: "", totalPage: 0, price: 0 ,image:""})

  }

  return(
    <>
      <h1>Daftar Buku</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Review</th>
            <th>Release Year</th>
            <th>Total Page</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

            {
              daftarBuku !== null && daftarBuku.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.review}</td>
                    <td>{item.release_year}</td>
                    <td>{item.totalPage}</td>
                    <td>{item.price}</td>
                  
                    <td>
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      {/* Form */}
      <h1>Books Form</h1>

      <div style={{width: "60%", display: "block"}}>
        <div style={{border: "1px solid #aaa", padding: "20px"}}>
          <form onSubmit={handleSubmit}>
            <label style={{float: "left"}}>
              Title:
            </label>
            <input style={{float: "right"}} type="text" required name="title" value={input.title} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Description:
            </label>
            <input style={{float: "right"}} type="text" required name="description" value={input.description} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Review:
            </label>
            <input style={{float: "right"}} type="text" required name="review" value={input.review} onChange={handleChange}/>
            <br/>
            <label style={{float: "left"}}>
              Release Year:
            </label>
            <input style={{float: "right"}} type="text" required name="release_year" value={input.release_year} onChange={handleChange}/>
            <br/>
            <label style={{float: "left"}}>
              Total Page:
            </label>
            <input style={{float: "right"}} type="text" required name="totalPage" value={input.totalPage} onChange={handleChange}/>
            <br/>
            <label style={{float: "left"}}>
              Price:
            </label>
            <input style={{float: "right"}} type="text" required name="price" value={input.price} onChange={handleChange}/>
            <br/>
            <label style={{float: "left"}}>
              Image URL: 
            </label>
            <input style={{float: "right"}} type="text" required name="image" value={input.image_url} onChange={handleChange}/>
            <br/>
            <br/>
            <div style={{width: "100%", paddingBottom: "20px"}}>
              <button style={{ float: "right"}}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DaftarBuku
