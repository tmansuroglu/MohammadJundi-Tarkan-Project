import React from 'react';
import { Row, Col, Typography, Image } from 'antd';
import text from '../../../placeholderText';
import mid1 from '../../../images/mid1.png';
import './index.css';

const CompareFood = () => {
    const { Title } = Typography;
    return (
        <Row align='middle' className='compareFoodRow'>
            <Col lg={12} xs={24} className='compareFoodCol'>
                <Title level={1}>COMPARE FOOD!</Title>
                <p className='compareFoodText'>{text}</p>
            </Col>
            <Col lg={12} xs={24} className='compareFoodCol'>
                <Image src={mid1} width='90%' />
            </Col>
        </Row>
    );
};

export default CompareFood;