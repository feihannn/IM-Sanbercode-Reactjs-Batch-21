import React from 'react';
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
class TunjukkanList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            buah:dataHargaBuah,
            namabaru:'',
            hargabaru:'',
            beratbaru:'',
            indexganti:-1
            
        }
        this.handleChangeNama=this.handleChangeNama.bind(this);
        this.handleChangeBerat=this.handleChangeBerat.bind(this);
        this.handleChangeHarga=this.handleChangeHarga.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChangeBaris=this.handleChangeBaris.bind(this);
        this.handleDeleteBaris=this.handleDeleteBaris.bind(this);
    }
    handleChangeNama(event){
        this.setState({namabaru:event.target.value});
    }
    handleChangeBerat(event){
        this.setState({beratbaru:event.target.value});
    }
    handleChangeHarga(event){
        this.setState({hargabaru:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault()
        if (this.state.indexganti===-1){
            this.setState({
                buah:[...this.state.buah,{nama:this.state.namabaru,harga:this.state.hargabaru,berat:this.state.beratbaru/1000}],
                namabaru:'',
                hargabaru:'',
                beratbaru:''
            })
        }
        else{
            this.state.buah[this.state.indexganti]={nama:this.state.namabaru,harga:this.state.hargabaru,berat:this.state.beratbaru}
        }
        
    }
    handleChangeBaris(event){
        let index=event.target.value
        let databuah=this.state.buah[index]
        this.setState({
            namabaru:databuah.nama,
            hargabaru:databuah.harga,
            beratbaru:databuah.berat,
            indexganti:index
        })

    }
    handleDeleteBaris(event){
        let index=event.target.value
        let buahlagi=this.state.buah
        let editbuah=buahlagi[this.state.indexganti]
        buahlagi.splice(index,1)
        if (editbuah!==undefined){
            var indexbaru=buahlagi.findIndex((el)=>el===editbuah)
            this.setState({buah:buahlagi,indexganti:indexbaru})
        }else{
            this.setState({buah:buahlagi})
        }
    }
    render(){
        return(
            <>
            <h1>Daftar Buah</h1>
            <table style={{marginLeft:"auto",marginRight:"auto"}}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.buah.map((val,index)=>{
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{val.nama}</td>
                                    <td>{val.harga}</td>
                                    <td>{val.berat} kg</td>
                                    <td>
                                           <button onClick={this.handleChangeBaris} value={index}>Edit</button>
                                            <button onClick={this.handleDeleteBaris} value={index}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h1>Form Daftar Harga Buah</h1>
            <form  onSubmit={this.handleSubmit} style={{border:"1px solid black",width:"800px",marginLeft:"auto",marginRight:"auto"}}>
            <label style={{marginLeft:"0px"}}>
                Nama:
            </label>          
            <input type="text" value={this.state.namabaru} onChange={this.handleChangeNama}/>
            <br/>
                <label>
                    Harga:
                </label>          
                <input type="text" value={this.state.hargabaru} onChange={this.handleChangeHarga}/>
                <br/>
                <label>
                    Berat(dalam gram):
                </label>          
                <input type="text" value={this.state.beratbaru} onChange={this.handleChangeBerat}/>
                <br/>
            
            <button >submit</button>
            </form>
            </>
        )
    }
}
export default TunjukkanList;