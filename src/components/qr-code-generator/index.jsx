import QRCode from "react-qr-code";
import {useState} from "react";
import "./styles.css"

export default function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState("")
    const [input, setInput] = useState("")

    function handleGenerateQrCode() {
        setQrCode(input)
        setInput("")
    }

    return <div>
        <h1>QR Code Generator</h1>
        <div className="qr-input-container">
            <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                name="qr-code"
                value={input}
                placeholder="Enter your value here"/>
            <button disabled={!(input && input.trim() !== "")} onClick={handleGenerateQrCode}>Generate
            </button>
        </div>
        <div>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
        </div>
    </div>
}