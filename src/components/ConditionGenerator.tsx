import React, { useState,useRef } from 'react';

var condArr = [{id:1,key:'Title',condition:'==',inp:''}]
type condArr ={
    id:number,key:string,condition:string,inp:string|number
}

const ConditionGenerator = () => {
    var keyArr:string[]=['Title','Quantity','Price','Brand']
    var strConditonArr:string[]=['==','!=','%Like%','!%Like%']
    var intConditionArr:string[]=['==','!=','<=','>=']
    var [conditionArr,setConditionArr]=useState<string[]|any>(strConditonArr)
    var selectRefs =useRef<HTMLSelectElement[]>([])
    var inpRef = useRef<HTMLInputElement>(null)
    var anyRef=useRef<HTMLInputElement>(null)
    var allRef=useRef<HTMLInputElement>(null)
    var [conditions,setConditions]=useState<condArr[]>(condArr)

    const selectKey =(e:React.ChangeEvent<HTMLSelectElement>)=>{
        if(e.target.value=='Title' || e.target.value=='Brand'){
            setConditionArr([...strConditonArr])
        }
        else{
            setConditionArr([...intConditionArr])
        }
    }

    const inpHandler =()=>{
        if(anyRef.current!==null ||allRef.current!==null)
        console.log(anyRef.current?.getAttribute('value'),allRef.current?.getAttribute('value'))
    }

    const addRow =()=>{

    }

  return (
    <div className='col-12 text-center'>
        <h3>String Condition Generator</h3>
        <div className='d-flex flex-row text-center col-12 justify-content-center align-items-center'>
            <label className='m-1'>Products must match: </label>
            <label className='m-1'>Any Condition:</label><input value='Any Condition'  type='radio' name='sd' className='m-1' ref={anyRef}/>
            <label className='m-1'>All Condition:</label><input value='All Condition'  type='radio' name='sd' className='m-1' ref={allRef}/>
        </div>
        <div className='col-12 d-flex flex-row justify-content-center align-items-center'>
            <select onChange={(e)=>selectKey(e)} className='col-3 p-2 m-1 rounded shadow fs-6 border-3 border-primary'>
                {keyArr.map((item)=>{
                    return <option key={item}>{item}</option>
                })}
            </select> 
            <select className='col-3 p-2 m-1 rounded shadow fs-6 border-3 border-primary'>
                {conditionArr.map((item:any)=>{
                    return <option>{item}</option>
                })}
            </select>
            <input type='text' onChange={inpHandler} ref={inpRef} className='col-3 p-2 m-1 rounded shadow fs-6 border-3 border-primary'/>
            {/* <button className='btn btn-danger'>Delete</button> */}
        </div>
        <button className='btn btn-info' onClick={addRow}>Add More</button>
        <label className='m-1'>Current Conditions: 
        {conditions.map((item)=>{
            return (
                <span>{item.key} {item.condition} {item.inp}</span>
            )
        })}
        </label>
    </div>
  )
}

export default ConditionGenerator