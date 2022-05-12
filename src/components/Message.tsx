import * as React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertProps } from '@material-ui/lab';

function Message(props: { open: boolean, handleClose: () => void , severity: AlertProps["severity"], content: string }) {
    return (
<div style={ {
    position: "fixed",
    width:"100%",
    height:"100%",
    top:"0",
    left:"0",
}}>
    <Snackbar
    open={props.open}
    autoHideDuration={2000}
    onClose={() => props.handleClose()}
    style={{ width: '100%' }}
    anchorOrigin= {{horizontal:"right", vertical: "top"}} >

<Alert onClose = {() => props.handleClose()} severity={props.severity}>
    {props.content}
</Alert>

    </Snackbar>


</div>
    );
}
export default Message;
