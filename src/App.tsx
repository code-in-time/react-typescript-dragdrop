import React from 'react';
import InputFormArea from './InputFormArea';

import { useState } from 'react';
import { IFormDataList, IFormData } from './model';
import LeftListData from './LeftListData';
import RightArea from './RightArea';

const defaultSata: IFormData = {
  id: Math.random(),
  name: '1', 
  email: 'a', 
  phone: 'q'}

function App() {

  const [formData, setFormData] = useState<IFormDataList>([])

  const addToFormData = (data: IFormData) => {

    setFormData((d: IFormDataList) => {
      return [...d, data]
    })

  }

  return (
    <div className="App">
      <InputFormArea  addToFormData={addToFormData}/>
      <LeftListData data={formData} />
      <RightArea data={formData}/>
    </div>
  );
}

export default App;
