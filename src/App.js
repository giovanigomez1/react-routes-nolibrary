import Accordion from "./components/Accordion"
import Route from "./components/Route"

import Header from "./components/Header"



const items = [
  {
    title: 'What is React 1?',
    content: '1 React is a front end javascript framework'
  },
  {
    title: 'What is React 2?',
    content: '2 React is a front end javascript framework'
  },
  {
    title: 'What is React 3?',
    content: '3 React is a front end javascript framework'
  }
]



function App () {
  return (
    <div>
      <Header />
      
      <Route path="/">
        <h2>Welcome</h2>
      </Route>
      <Route path="/accordion">
        <Accordion items={items}/>
      </Route>
      <Route path="/about">
        <p>This is a very single component to show how to use custom routing navigation without using libraries like React-Router</p>
        <p>React-Router is very easy to use but it frecuently has breaking changes that causes to break projects already on production </p>
      </Route>
      

    </div>
  )
}


export default App


