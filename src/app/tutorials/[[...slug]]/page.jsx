import Title from '@/component/Title';
import React from 'react';

const TutorialPage = async({params}) => {
    // const {technology,topic, page_no ,subjects} =await params
    const {slug} =await params
    const [technology,topic, , page_no ,subjects] =slug || [];
    console.log(slug)
    return (
        <div>
            <Title>{technology} tutorials</Title>
            <h2>{topic}</h2>
            <div className='flex justify-between'>
                <h3 className='font-bold'>{subjects}</h3>
                <p>page no:{page_no}</p>
            </div>
            this is TutorialPage
        </div>
    );
};

export default TutorialPage;