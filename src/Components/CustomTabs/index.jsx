import React, { useState } from 'react'
import './styles.css'

const CustomTabs = ({tabsContent, onChange}) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

  return (
    <div className="custom-tabs-wrapper">
        <div className="custom-tabs-heading">
            {tabsContent.map((tabItem, index) =>(
                <div 
                    key = {tabItem.label} 
                    onClick = {() => handleOnClick(index)}
                    className = {`tab-item ${currentTabIndex === index ? 'active' : ''}`}
                >
                    <span className="custom-tabs-label">{tabItem.label}</span>
                </div>
                ))}
        </div>
        <div className="custom-tabs-content">
            {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
    </div>
  )
}

export default CustomTabs