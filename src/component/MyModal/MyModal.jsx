import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const MyModal = () => {
    const [visible, setVisible] = useState(false);

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some modal content goes here.</p>
            </Modal>
        </>
    );
};

export default MyModal;
