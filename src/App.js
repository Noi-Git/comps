import './App.css'
import Button from './Button'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function App() {
  return (
    <div className='App'>
      <div>
        <Button rounded outline>
          <GoBell />
          Hi there!!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoCloudDownload />
          Something!
        </Button>
      </div>
    </div>
  )
}

export default App