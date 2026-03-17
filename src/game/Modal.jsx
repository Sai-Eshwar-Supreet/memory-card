import { useEffect, useRef } from "react";
import '../styles/Modal.css';

function Modal({title, open, children}){

    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if(!dialog) return;

        if(open) dialog.showModal();
        else dialog.close();

        return  () => {
            dialog.close();
        }

    }, [open]);

    function handleCancel(){
        console.log('Cancelling');
    }

    return <dialog className="popup-panel" ref={dialogRef} onCancel={handleCancel} >
        <div className="popup-container">
            <h2 className="popup-title">{title}</h2>
            {children}
        </div>
    </dialog>
}

export default Modal;