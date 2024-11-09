import MenuList from "./menu-list";
import {useState} from "react";
import {FaMinus, FaPlus} from "react-icons/fa";

export default function MenuItem({item}) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentTitle) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren, [getCurrentTitle]: !displayCurrentChildren[getCurrentTitle]
        })
    }

    return <li>
        <div className="menu-item">
            <p>{item.title}</p>
            {
                item && item.children && item.children.length
                    ? <span onClick={() => handleToggleChildren(item.title)}>
                    {
                        displayCurrentChildren[item.title] ? <FaMinus color="#fff" size={20}/> :
                            <FaPlus color="#fff" size={20}/>
                    }
                    </span>
                    : null
            }
        </div>
        {
            (item && item.children && item.children.length > 0) && displayCurrentChildren[item.title]
                ? <MenuList list={item.children}/>
                : null

        }
    </li>
}