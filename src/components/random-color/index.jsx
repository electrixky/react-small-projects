import {useEffect, useState} from "react";
import "./styles.css"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const handleCreateRandomHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#"

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setTypeOfColor("hex");
        setColor(hexColor)
    }

    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setTypeOfColor("rgb");
        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if (typeOfColor === "rgb")
            handleCreateRandomRgbColor()
        else
            handleCreateRandomHexColor()
    }, [typeOfColor]);

    return <div className="container" style={{background: color}}>
        <button className="btn" onClick={() => handleCreateRandomHexColor()}>Create HEX Color
        </button>
        <button className="btn" onClick={() => handleCreateRandomRgbColor()}>Generate RGB Color
        </button>
        <button className="btn" onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate
            Random Color
        </button>
        <h1>{color}</h1>
    </div>
}