
import './App.css'
import Counter from './Counter'

function App() {
 

  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{height:'100vh'}}>
             <div className='d-flex align-items-center justify-content-center p-5 rounded-3 flex-column' style={{backgroundColor:'white'}}>
                <h3 className='text-primary'>COUNTER APPLICATION</h3>
                <Counter/>
             </div>
      </div>
    </>
  )
}

export default App
