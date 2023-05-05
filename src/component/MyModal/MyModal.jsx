import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const MyModal = ({visible, setVisible, handleOk, handleCancel, text }) => {
    return (
        <>
            <Modal
                title="Basic Modal"
                open={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>{text}</p>
            </Modal>
        </>
    );
};

export default MyModal;
