import React, { useRef, CSSProperties } from 'react'
import { IFormDataList, IFormData } from './model';

interface IProps {
  data: IFormDataList;
}


const addRow = (data: IFormDataList) => {

  return (
    data.map((v: IFormData) => {
      return (
        <tr draggable="true">
          <td>{v.id}</td>
          <td>{v.name}</td>
          <td>{v.email}</td>
          <td>{v.phone}</td>
        </tr>
      )

    })

  )
}

const tableStyle: CSSProperties = {
  position: 'fixed',
  bottom: '0',
  right: '0',
  border: '1px solid red',
  minHeight: '100px'
};

const onDrop = (e: any) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  const dataObj = JSON.parse(data) as IFormData;
  console.log('ondrop', dataObj)

}

const onDragOver = (e: any) => {
  e.preventDefault();
  console.log('onDragOver')

}



const RightArea: React.FC<IProps> = ({ data }) => {
  return (
    <table
      style={tableStyle}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
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

export default RightArea