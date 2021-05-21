import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';

import React, { useState, useRef } from 'react';
import { ConfirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export const ConfirmPopupDemo = () => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Using ConfirmPopup tag</h5>
                <ConfirmPopup target={document.getElementById('button')} visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                    icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                <Button id="button" onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </div>
    )
}