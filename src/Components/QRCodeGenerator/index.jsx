import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode() {
        setQrCode(input)
        setInput('')
    }

  return (
    <div>
        <div>
            <input 
                onChange = {(e) => setInput(e.target.value)}
                type="text"
                name = 'qr-code'
                placeholder = 'Enter value here' 
                value = {input}
            />
            <button 
                disabled = {
                    input && input.trim() !== ''
                    ? false
                    : true
                }
                onClick = {handleGenerateQrCode}
            >
                Create
            </button>
        </div>
        <div>
            <QRCode 
                id = 'qr-code-value'
                value = {qrCode}
                size = {400}
                bgColor='#fff'
            />
        </div>
    </div>
  )
}

export default QRCodeGenerator