import React from 'react';
import Form from '../Components/Form/Form';
import PageHero from '../Components/common/PageHero';
import inquiryHeroImg from '../assets/hero-bg.jpg';

const InquiryPage = () => {
    return (
        <div className="pt-20 bg-soft min-h-screen pb-16">

            <div className="container mt-12">
                <div className="max-w-4xl mx-auto">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default InquiryPage;
