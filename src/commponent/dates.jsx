import { useState } from "react"

const Dates = ({person, deleteDate}) => {
    const deleteData = (index) => {
        deleteDate(index)
    }

    const [flip, setFlip] = useState(true)
    const flipFace = (index) => {
        setFlip(!flip)
        flip ? person[index].flip = "block" : person[index].flip = "block flip";
    }

    if(person.length > 0) {
        return(<ul className="arr">
                {person.map((item, index)=>{
                    return(
                        <li key={index} className={item.flip} onClick={() => flipFace(index)}>
                            <div className="front face">
                                <img src={item.img}/>
                                <div className="prag">
                                    <p>{item.name}</p>
                                    <p>{item.time}</p>
                                </div>
                            </div>
                            <div className="note face">
                                <p>{item.note ? item.note : "لا يوجد ملاحظات !"}</p>
                                <button className="delete" onClick={() => deleteData(index)}>X</button>
                            </div>
                        </li>
                    )})}
            </ul>)
    } else {
        return(
            <div className="arr none-grid"><h1>لا يوجد مواعيد...</h1></div>
        )
    }
}

export default Dates;