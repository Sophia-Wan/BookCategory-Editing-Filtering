import { useRef } from "react";
import NewForm from "./NewForm.jsx";

function Modal({btnLabel, btnclassName, children})    {
const modalRef = useRef();

function handleClick() {
    modalRef.current.showModal();

}
    return(
        <>
<button className={btnclassName} onClick={handleClick}>{btnLabel}</button>
<dialog ref={modalRef}>{children}</dialog>
</>
    );

}
export default Modal;