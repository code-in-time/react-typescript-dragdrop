import React, { useRef } from 'react'
import { IFormDataList, IFormData } from './model';

interface IProps {
  data: IFormDataList;
}


const addRow = (data: IFormDataList) => {

  return (
    data.map(v => {
      return(
        <tr>
        <td>c</td>
        <td>c</td>
        <td>c</td>
        <td>c</td>
      </tr>
      )

    })

  )}




const LeftListData: React.FC<IProps> = ({data}) => {
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