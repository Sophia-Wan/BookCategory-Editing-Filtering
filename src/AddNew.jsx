import { useRef } from "react";
import NewForm from "./NewForm";
import Modal from "./Modal";

function New() {
    function openModal(e){
        const dialog = document.querySelector('#my-dialog');
        dialog.show();
    }
    function closeModal(e){
        const dialog = document.querySelector('#my-dialog');
        dialog.close();
    }
    return (
        <div>
            <Modal btnLabel = "New" btnclassName='new'>
<newForm />
            </Modal>
        </div>
        
    );
}

export default New;
import "./AddNew.css";