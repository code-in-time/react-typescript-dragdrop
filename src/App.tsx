import React from 'react';
import InputFormArea from './InputFormArea';

import { useState } from 'react';
import { IFormDataList, IFormData } from './model';

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
    </div>
  );
}

export default App;
