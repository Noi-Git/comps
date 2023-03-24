import './App.css'
import Accordion from './components/Accordion'

function App() {
  const items = [
    {
      id: 1,
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You need to also understand redux',
    },
    {
      id: 2,
      label: 'Can I use Javascript on a project?',
      content:
        'You can use Javascript on any project you want. But make sure you understand how Javascript works',
    },
    {
      id: 3,
      label: 'Can I use CSS on a project?',
      content:
        'You can use CSS on any project you want. CSS seems like easy but it is really complicated',
    },
  ]

  return <Accordion items={items} />
}

export default App
