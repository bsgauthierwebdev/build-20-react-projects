import React, {useState} from 'react'
import data from './data'
import './styles.css'

const Accordion = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multipleSelected, setMultipleSelected] = useState([])


    function handleSingleSelect(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelect(getCurrentId) {
        let copyMultiple = [...multipleSelected]
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1)

        setMultipleSelected(copyMultiple)
    }

    console.log(selected, multipleSelected)

  return (
    <div>
        <div className="wrapper">
            <button onClick = {() => setEnableMultiSelect(!enableMultiSelect)}>
                {!enableMultiSelect 
                ? 'Enable Multi Select' 
                : 'Disable Mult Select'}
            </button>
            <div className="accordion">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className = 'item'>
                        <div onClick = {
                            enableMultiSelect 
                                ? () => handleMultiSelect(dataItem.id) 
                                : () => handleSingleSelect(dataItem.id)
                            }
                            className="title"
                        >
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {enableMultiSelect
                            ? multipleSelected.indexOf(dataItem.id) !== -1 && (
                                <div className="content">{dataItem.answer}</div>
                            )
                            : selected === dataItem.id && (
                                <div className="content">{dataItem.answer}</div>
                            )
                        }
                        {/* {
                            selected === dataItem.id || 
                            multipleSelected.indexOf(dataItem.id) !== -1 ? 
                            <div className = 'content'>{dataItem.answer}</div>
                            : null
                        } */}
                    </div>)
                    : <div>No data found</div>
                }
            </div>
        </div>
    </div>
  )
}

export default Accordion