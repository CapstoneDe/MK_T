import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LeftLayout = () => {
    const leftLayoutStyles = {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
    };

    const sidebarStyles = {
        width: '200px',
        background: '#F5F5F5',
        padding: '20px',
    };

    const contentStyles = {
        flex: '1',
        padding: '20px',
    };
    const buttonStyles = {
        marginTop: '10px',
    };

    return (
        <div style={leftLayoutStyles}>
            <div style={sidebarStyles}>
                <Form.Label htmlFor="inputPassword5">요구사항을 입력하세요</Form.Label>
                <Form.Control
                    type="요구사항을 입력하세요"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    요구사항을 입력하면 코드와 데이터베이스의 테이블로 변환됩니다.
                </Form.Text>
                <Button variant="outline-secondary">Convert</Button>{' '}
            </div>
            <div style={contentStyles}>
                <h3>테이블이 만들어집니다...</h3>
            </div>
        </div>
    );
};

export default LeftLayout;