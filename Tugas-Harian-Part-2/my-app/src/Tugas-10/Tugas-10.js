import React from 'react';

//Mengubah data 
let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]
  function converter(data){
    for(let i=0;i<dataHargaBuah.length;i++){
      data[i].berat/=1000;
    }
    return data;
  }
  dataHargaBuah=converter(dataHargaBuah);
  //Properti
  class NamaBuah extends React.Component{
    render(){
      return <h5 style={{textAlign:"left",fontFamily:"Times New Roman",fontSize:"15px",marginTop:"2px",marginBottom:"2.5px",fontWeight:"normal"}}>{this.props.nama}</h5>
    }
  }
  class HargaBuah extends React.Component{
    render(){
      return <h5 style={{textAlign:"left",fontFamily:"Times New Roman",fontSize:"15px",marginTop:"2px",marginBottom:"2px",fontWeight:"normal"}}>{this.props.harga}</h5>
    }
  }
  class BeratBuah extends React.Component{
    render(){
      return <h5 style={{textAlign:"left",fontFamily:"Times New Roman",fontSize:"15px",marginTop:"2px",marginBottom:"2px",fontWeight:"normal"}}>{this.props.berat} kg</h5>
    }
  }
  class Header extends React.Component{
    render(){
      return(
        <>
          <tr style={{lineHeight:"15px"}}>
            <td style={{backgroundColor:"grey",width:"500px"}}><h5 style={{marginTop:"2px",marginBottom:"2px"}}>Nama</h5></td>
            <td style={{backgroundColor:"grey",width:"250px"}}><h5 style={{marginTop:"2px",marginBottom:"2px"}}>Harga</h5></td>
            <td style={{backgroundColor:"grey",width:"250px"}}><h5 style={{marginTop:"2px",marginBottom:"2px"}}>Berat</h5></td>
          </tr>
        </>
      )
    }
  }
  class DaftarBuah extends React.Component{
    render(){
      return(
       <>
            {dataHargaBuah.map(el=>{
              return(
                <tr style={{backgroundColor:"#eb7134",lineHeight:"15px"}}>
                  <td ><NamaBuah nama={el.nama}/></td>
                  <td><HargaBuah harga={el.harga}/></td>
                  <td><BeratBuah berat={el.berat}/></td>
                </tr>
              )
            })}
       </>
      )
    }
  }
  class Tampilkan extends React.Component{
      render(){
          return(
              <>
              <h1 style={{marginLeft:"300px",textAlign:"left",fontSize:"50px",fontFamily:"Times New Roman"}}>Tabel Harga Buah</h1>
            <table style={{border:"2px solid black"}}>
                <Header/>
                <DaftarBuah/>
            </table>
              </>
          )
      }
  }

  export default Tampilkan;