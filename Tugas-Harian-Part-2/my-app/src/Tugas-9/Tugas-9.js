import React from 'react';

class Judul extends React.Component{
    render(){
      return <h1 style={{textAlign:"left",marginLeft:"75px"}}> Form Pembelian Buah</h1>;
    }
  }
  class Tabel extends React.Component{
    render(){
      return(
        <>
          <table>
          <tr>
            <td><h5 style={{marginLeft:"15px"}}>Nama Pelanggan</h5></td>
            <td><input type="text" style={{marginLeft:"20px",border:"0.5px solid black",backgroundColor:"white"}}></input></td>
          </tr>
          <tr>
            <td><h5 style={{textAlign:"left",marginTop:"84px",marginLeft:"15px"}}>Daftar Item</h5></td>
            <form>
              <td>
                <input type ="checkbox" name="Semangka" value="Semangka" style={{marginLeft:"20px"}}></input>
                <label for="Semangka">Semangka</label>
                <br></br>
                <input type ="checkbox" name="Jeruk" value="Jeruk" style={{marginLeft:"-15px"}}></input>
                <label for="Jeruk">Jeruk</label>
                <br></br>
                <input type ="checkbox" name="Nanas" value="Nanas" style={{marginLeft:"-10px"}}></input>
                <label for="Nanas">Nanas</label>
                <br></br>
                <input type ="checkbox" name="Salak" value="Salak" style={{marginLeft:"-15px"}}></input>
                <label for="Salak">Salak</label>
                <br></br>
                <input type ="checkbox" name="Anggur" value="Anggur" style={{marginLeft:"-3px"}}></input>
                <label for="Anggur">Anggur</label>
                <br></br>
              </td>
            </form>
          </tr>
          <tr>
            <td><input type="submit" value="Kirim" style={{border:"2px solid black",backgroundColor:"white",borderRadius:"10px",marginLeft:"-55px"}}></input></td>
          </tr>
        </table>
        </>
      )
    }
  }
  class Gabungkan extends React.Component{
    render(){
      return(
        <>
          <Judul/>
          <Tabel/>
        </>
      )
    }
  }
  export default Gabungkan;