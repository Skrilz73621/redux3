import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainPageReducer from '../../redux/reducers/MainPageReducer'
import { changeInputAction, asyncGetOffensiveQuoteAction} from '../../redux/actions'

export default function MainPage() {

    const dispatch = useDispatch()

    const {id, name, age} = useSelector(state => state.MainPageReducer)

    const asyncGetOffensiveQuote = () =>{
      dispatch(asyncGetOffensiveQuoteAction(name))
      console.log(name)
    }

    const changeInput = (event) =>{
      dispatch(changeInputAction(event.target.value))
    }



  return (
    <div>
      <input type="text" placeholder='Введите имя' onChange={changeInput}/>
      <button onClick={asyncGetOffensiveQuote}>Получить возраст</button>
      <div>
        <p>id: {id}</p>
        <p>Имя: {name}</p>
        <p>Ваш предположительный возраст: {age}</p>
      </div>
    </div>
  )
}
