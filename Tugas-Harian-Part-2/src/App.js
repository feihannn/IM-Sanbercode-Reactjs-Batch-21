import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"left",marginLeft:"75px"}}> Form Pembelian Buah</h1>
      <table>
        <tr>
          <td><h5>Nama Pelanggan</h5></td>
          <td><input type="text" style={{marginLeft:"20px"}}></input></td>
        </tr>
        <tr>
          <td><h5>Daftar Item</h5></td>
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
          <td><input type="submit" value="Kirim" ></input></td>
        </tr>
      </table>

    </div>
  );
}

export default App;
