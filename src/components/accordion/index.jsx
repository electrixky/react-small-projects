import {useState} from "react";
import data from "./data";
import "./styles.css"

export default function Accordion() {
    const [selected, setSelected] = useState(null)

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id)
    }

    return <div className="wrapper">
        <div className="accordion">
            {
                data && data.length > 0
                    ? data.map(item => {
                        return <div className="item" onClick={() => handleSingleSelection(item.id)}>
                            <div className="title">
                                <h3>{item.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === item.id
                                    ? <div className="content">{item.answer}</div>
                                    : null
                            }
                        </div>
                    })
                    : <div>No data</div>
            }
        </div>
    </div>
}