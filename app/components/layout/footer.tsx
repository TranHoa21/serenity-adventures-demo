'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '@/app/styles/layout/footer.scss';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="style">
            <Container className='foot'>
                <Row className='box'>
                    <Col md={6}>
                        <h5>About Us</h5>
                        <p>Serenity Adventure Safaris is a Tour and Travel Company in Rwanda that provides safaris and travel related services throughout East Africa. We are enthusiastic to service excellence, providing complete attention to all our clients, scrupulous attention to detail as well as uncompromising safety standards. We really have most experienced Staff and Competent Team who are well familiar with the Tour and Travel Industry. Our Safari Diver/Guides are well versed about flora, Fauna, history, culture of Rwanda and the rest of East African Countries as well.</p>
                    </Col>
                    <Col className="item" md={3}>
                        <h5>Serenity Safaris</h5>
                        <ul className="list-unstyled">
                            <li><Link className="foo-item" href="#">Rwanda safari</Link></li>
                            <li><Link className="foo-item" href="#">Uganda safaris</Link></li>
                            <li><Link className="foo-item" href="#">Tazania safaris</Link></li>
                            <li><Link className="foo-item" href="#">Congo safaris</Link></li>
                        </ul>
                    </Col>
                    <Col className="item" md={3}>
                        <h5>Contact Info</h5>
                        <p>
                            KN 59 St, Kigali, Rwanda. East Africa</p>
                        <p className="contact">
                            <a href="mailto:info@serenityadventuretours.com">
                                Email: info@serenityadventuretours.com </a> </p>
                        <p className="contact">
                            <a href="https://www.serenityadventuretours.com/tel:250736173331">
                                Phone: +250 736 173 331</a> </p>
                    </Col>
                </Row>
                <Row className='box'>
                    <Col md={12}>
                        <hr />
                        <p className="text-center">
                            &copy;2025 Copyright Thanh Hoa Tran | Designed & Developed by Thanh Hoa Tran
                        </p>                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;