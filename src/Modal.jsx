import { useRef, cloneElement } from "react";

function Modal({ btnLabel, btnclassName, children }) {
    const modalRef = useRef();

    function handleOpen() {
        modalRef.current?.showModal();
    }

    function handleClose() {
        modalRef.current?.close();
    }

    // If children is a single React element, inject closeModal prop so the child can close the dialog
    const childWithClose =
        children && typeof children === "object"
            ? cloneElement(children, { closeModal: handleClose })
            : children;

    return (
        <>
            <button className={btnclassName} onClick={handleOpen}>
                {btnLabel}
            </button>
            <dialog ref={modalRef}>{childWithClose}</dialog>
        </>
    );
}

export default Modal;