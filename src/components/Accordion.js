import { Fragment } from "react"

function Accordion({items}) {

  const renderedItems = items.map((item) => {
    
    return <Fragment key={item.title}>
             <div className="title active">
                <i className="dropdown icon"></i>
                  {item.title}
              </div>
              <div className="content active">
                <p>{item.content}</p>
              </div>
            </Fragment>
    
  })

  return <div className="ui styled accordion">
    {renderedItems}
  </div>
}

export default Accordion
