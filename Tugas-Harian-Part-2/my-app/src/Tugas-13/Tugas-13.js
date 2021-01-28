import React,{useState,useEffect} from 'react';
import axios from 'axios';
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
const TunjukkanList13=()=>{
    const[buah,daftarbuahbaru]=useState(dataHargaBuah)
    const[namabaru,inputnamabaru]=useState("")
    const[hargabaru,inputhargabaru]=useState("")
    const[beratbaru,inputberatbaru]=useState("")
    const[indexganti,inputindexbaru]=useState(-1)

    useEffect(()=>{
        if(buah===null){
            axios.get('http://backendexample.sanbercloud.com/api/fruits').then(res=>{
                let data=res.data
                daftarbuahbaru(data.map(el=>{return {nama:el.name,harga:el.price,berat:el.weight}}))
            })
        }
    },[buah])
    const handleChangeNama=(event)=>{
        inputnamabaru(event.target.value)
        console.log(inputnamabaru)
    }
    const handleChangeBerat=(event)=>{
        inputberatbaru(event.target.value)
    }
    const handleChangeHarga=(event)=>{
        inputhargabaru(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(indexganti===null){
            axios.post('http://backendexample.sanbercloud.com/api/fruits',{name:namabaru,price:hargabaru,weight:beratbaru}).then(res=>{
                let data=res.data
                daftarbuahbaru([...buah,{nama:data.name,harga:data.price,berat:data.weight}])
            })
        }else{
            axios.put('http://backendexample.sanbercloud.com/api/fruits/${indexganti}',{name:namabaru,price:hargabaru,weight:beratbaru}).then(()=>{
                let sendiri=buah.find(el=>el.id===indexganti)
                sendiri.name=inputnamabaru
                sendiri.price=inputhargabaru
                sendiri.weight=inputberatbaru/1000
                daftarbuahbaru([...buah])

            })
        }
        inputnamabaru("")
        inputhargabaru("")
        inputberatbaru("")
        inputindexbaru(null)

    }
    const handleChangeBaris=(event)=>{
        let index=event.target.value
        axios.get('http://backendexample.sanbercloud.com/api/fruits/${index}').then(res=>{
                let data=res.data
                inputnamabaru(data.name)
                inputhargabaru(data.price)
                inputberatbaru(data.weight)
        })
    }
    const handleDeleteBaris=(event)=>{
        /*
        let index=event.target.value
        let buahlagi=buah
        let editbuah=buahlagi[indexganti]
        buahlagi.splice(index,1)
        if (editbuah!==undefined){
            var indexbaru=buahlagi.findIndex((el)=>el===editbuah)
            daftarbuahbaru([...buahlagi])
            inputindexbaru(indexbaru)//mencurigakan
        }else{
            daftarbuahbaru([...buahlagi])
        }*/
        let index=parseInt(event.target.value)
        axios.delete('http://backendexample.sanbercloud.com/api/fruits/${index}').then(()=>{
                let baru=buah.filter(el=>{return el.id!==index})
                daftarbuahbaru([...baru])
        })
    }

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
                    buah.map((val,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.nama}</td>
                                <td>{val.harga}</td>
                                <td>{val.berat} kg</td>
                                <td>
                                        <button onClick={handleChangeBaris} value={index}>Edit</button>
                                        <button onClick={handleDeleteBaris} value={index}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h1>Form Daftar Harga Buah</h1>
        <form  onSubmit={handleSubmit} style={{border:"1px solid black",width:"800px",marginLeft:"auto",marginRight:"auto"}}>
        <label style={{marginLeft:"0px"}}>
            Nama:
        </label>          
        <input type="text" value={namabaru} onChange={handleChangeNama}/>
        <br/>
            <label>
                Harga:
            </label>          
            <input type="text" value={hargabaru} onChange={handleChangeHarga}/>
            <br/>
            <label>
                Berat(dalam gram):
            </label>          
            <input type="text" value={beratbaru} onChange={handleChangeBerat}/>
            <br/>
        
        <button >submit</button>
        </form>
        </>
    )
    
}
export default TunjukkanList13;