import './App.css'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import { ResultInfoBar } from './components/ResultInfoBar'
import { ResultTable } from './components/ResultTable'
import { SearchProvider } from './contexts/SearchContext'
import Cart from './components/Cart'

function App() {

  return (
    <SearchProvider>
      <Navbar />
      <div className="mainContainer">
        <div style={{ flex: 1 }}>
          <ResultInfoBar />
          <div className='content-ResultandFilter'>
            <Filter />
            <ResultTable />
          </div>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </SearchProvider>
  )
}

export default App
