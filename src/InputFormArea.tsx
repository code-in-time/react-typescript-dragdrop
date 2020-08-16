import React, { useRef } from 'react'
import { IFormDataList, IFormData } from './model';

interface IProps {
  addToFormData: (d: IFormData) => void
}

const InputFormArea: React.FC<IProps> = ({addToFormData}) => {

  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)

  const formSubmit = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault()
    addToFormData({
      id : Math.random(),
      name: 'nameRef?.current?.value',
      email: 'emailRef?.current?.value',
      phone: 'phoneRef?.current?.value'
    })
  }


  return (
    <form onSubmit={formSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input ref={nameRef} type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input ref={emailRef} type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="phone"></label>
        <input ref={phoneRef} type="text" name="phone" id="phone" />
      </div>
      <div>
      <button type="submit">Submit</button></div>
    </form>
  )
}

export default InputFormArea