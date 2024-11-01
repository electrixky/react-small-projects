import {useState} from "react";
import data from "./data";
import "./styles.css"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

export default function Accordion() {
    const [selected, setSelected] = useState(null)
    const [enableMulti, setEnableMulti] = useState(false)
    const [multi, setMulti] = useState([])

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id)
    }

    const handleMultiSelection = (id) => {
        let copyMulti = [...multi]
        const findIndexOfCurrentId = copyMulti.indexOf(id)
        if (findIndexOfCurrentId === -1) {
            copyMulti.push(id)
        } else {
            copyMulti.splice(findIndexOfCurrentId, 1)
        }
        setMulti(copyMulti)
    }

    return <div className="wrapper">
        <button
            className={`btn ${enableMulti ? "disable-btn" : ""}`}
            onClick={() => setEnableMulti(!enableMulti)}
        >{`${enableMulti ? "Disable" : "Enable"} Multi Selection`}
        </button>
        <div className="accordion">
            {
                data && data.length > 0
                    ? data.map(item => {
                        return <div className="item"
                                    onClick={enableMulti
                                        ? () => handleMultiSelection(item.id)
                                        : () => handleSingleSelection(item.id)}>
                            <div className="title">
                                <h3>{item.question}</h3>
                                <span className="toggle-btn">{selected === item.id ? <IoIosArrowUp/> :
                                    <IoIosArrowDown/>}</span>
                            </div>
                            {
                                selected === item.id || multi.indexOf(item.id) !== -1
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