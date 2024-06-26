import { useState } from 'react'
import './index.css'
import Button from './components/button/Button'

const App = () => {
  const [init, setInit] = useState(0)

  return (
    <div className='container'>
      <h1>My first applicaction</h1>
      <div>
        <h2>You clicked here {init} time</h2>
        <div className='contain-btns'>
          <Button onClick={() => setInit(0)} bg='indigo' txtc='white'>
            Restart
          </Button>
          <Button
            onClick={() => {
              if (init < 10) setInit(init + 1)
              else alert('El minimo es 0 y el maximo es 10')
              return
            }}
            bg='yellow'
            txtc='black'
          >
            Sumar
          </Button>
          <Button
            onClick={() => {
              if (init <= 0) {
                alert('El minimo es 0 y el maximo es 10')
                return
              } else setInit(init - 1)
            }}
            bg='red'
            txtc='white'
          >
            Restar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
