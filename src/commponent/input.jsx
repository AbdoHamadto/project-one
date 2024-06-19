import { useState } from "react";
import myImg from './img/img-one.jpg'

const Input = ({person, dataSend}) => {
    const [name, setName] = useState('');
    const [num, setNum] = useState('')
    const [note, setNote] = useState('');
    const addDate = () => {
        if(name !== "" && num >= 0 && num < 24 && num !== "") {
            if(num <= 11) {
                const data = {name: name, time: num + "AM", img: myImg, note:note, flip: "block"}
                dataSend(data)
                setName("")
                setNum("")
                setNote("")
            } else {
                if (num === "12") {
                    const data = {name: name, time: num + "PM", img: myImg, note:note, flip: "block"}
                    dataSend(data)
                    setName("")
                    setNum("")
                    setNote("")
                } else {
                    const time = num - 12;
                    const data = {name: name, time: time + "PM", img: myImg, note:note, flip: "block"}
                    dataSend(data)
                    setName("")
                    setNum("")
                    setNote("")
                }
            }
        }
    }
    return(
        <>
            <div className="num"><p className="start">لديك اليوم {person.length} مواعيد</p></div>
            <div className="in-put">
                <input type="text" placeholder="الإسم..." className="wid" onChange={(e) => setName(e.target.value)} value={name}/>
                <button className="Add" onClick={addDate}>إضافه معاد</button>
                <input type="number" placeholder="الوقت..." className="wid" max={24} min={0} onChange={(e) => setNum(e.target.value) } value={num}/>
            </div>
            <div className="center">
                <input type="text" className="notes" placeholder="ملاحظات..." onChange={(e) => setNote(e.target.value) } value={note}/>
            </div>
        </>
    )
}

export default Input;