import React, { useEffect } from 'react'
import { useState } from 'react'
export default function Todo() {
    const [item,setItem]=useState()
    const [data,setData]= useState([])
    const handleItem = (e) => {
        e.preventDefault()
        console.log('item',item)
        setData([...data, item])
    }
    const [curr, setCurr] = useState('current')
    // setItem
    // getITem
    localStorage.setItem('current', 'Avatar')
    const toggle = () => {
      alert('toggle')
      setCurr(localStorage.getItem('current'))
    }
    const setLocalData = () => {
      localStorage.setItem("localData", 'skill')
      alert('added')
    }
    const getLocalData = () => {
      var string = localStorage.getItem("localData")
      console.log('st', string)
      alert('get')
    }

    useEffect(() => {
    var localData = localStorage.getItem('todoData')
    console.log('data_local', JSON.parse(localData))
    if (localData)  setData(JSON.parse(localData))
    },[])

    useEffect(() => {
      if(data.length > 0) localStorage.setItem('todoData', JSON.stringify(data))
      console.log('data_value', data)
    },[data])

  return (
    <>
    <h1> {curr} </h1>
    <button onClick={() => toggle()} > Toggle </button>
    <form onSubmit={(e) => handleItem(e)} style={{width:"40%",marginTop:"20%",marginLeft:"10%"}} >
      <lable style={{color:"white"}} >Item Name</lable>
      <input onChange={(e)=> setItem(e.target.value)} type="text" />
      <button type="submit" style={{background:"green",padding:"text20px", margin:"10px"}} >Add Item</button>
      <button onClick={() => setLocalData()} style={{background:"green",padding:"text20px", margin:"10px"}} >Add Local Data</button>
      <button onClick={() => getLocalData()} style={{background:"green",padding:"text20px", margin:"10px"}} >Get Local Data</button>
    </form>
    
      {data.map((item)=>(
              <h3> {item} </h3>
          ))}
    </>
  )
}