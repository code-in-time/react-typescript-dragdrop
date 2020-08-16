import React, { useRef } from 'react'
import { IFormDataList, IFormData } from './model';

interface IProps {
  data: IFormDataList;
}


const addRow = (data: IFormDataList) => {

  const onDragStart = (e: any, v:IFormData) => {
    e.dataTransfer.setData("text", JSON.stringify(v));
    console.log('onDragStart', [e, JSON.stringify(v)])
  
  }

  return (
    data.map((v: IFormData) => {
      return (
        <tr
          draggable="true"
          onDragStart={(e) => onDragStart(e, v)}
        >
          <td>{v.id}</td>
          <td>{v.name}</td>
          <td>{v.email}</td>
          <td>{v.phone}</td>
        </tr>
      )

    })

  )
}




const LeftListData: React.FC<IProps> = ({ data }) => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      {addRow(data)}
    </table>
  )
}

export default LeftListData