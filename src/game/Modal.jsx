import { useEffect, useRef } from "react";

function Modal({open, children}){

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

    return <dialog ref={dialogRef} onCancel={handleCancel} >
        {children}
    </dialog>
}

export default Modal;