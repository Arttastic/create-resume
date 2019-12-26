import React, { ChangeEvent, useContext } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import { List as ListType } from '../ResumeTypes'

const Text = (props) => {
  const { updateSection } = useContext(AppContext)

  const updateListElement = (index: number, value: Partial<ListType>) => {
    const elements = props.text.elements
      .map((el, elIndex) => elIndex === index ? { ...el, ...value } : el)
    updateSection(props.index, { ...props.text, elements })
  }

  const updateListElementText = (index: number, listIndex: number, value: string) => {
    const listTexts = props.text.elements[index].elements.map((el, elIndex) => elIndex === listIndex ? value : el);
    updateListElement(index, { elements: listTexts })
  }
  
  // Display for placeholder/labels
  const display = () => props.text.title ? props.text.title : 'Text'

  return (
    <div>
      {props.text.elements.map((element, index) => {
        return (
          <div key={index} className="content__wrapper">
            <div className="content__el content--list">
              {element.elements.map((listEl, listIndex) => {
                return (
                  <div className="input" key={listIndex}>
                    <label>{display()} Text</label>
                    <textarea
                      name="element"
                      placeholder={`${display()} Text`}
                      value={listEl}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        e.preventDefault()
                        updateListElementText(index, listIndex, e.target.value)
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Text