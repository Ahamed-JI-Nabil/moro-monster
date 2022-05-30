import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className='p-12'>
                <h2 className='text-2xl mb-4'>Name: Ahamed Johayir Iqbal</h2>
                <h2 className='text-2xl mb-4'>Email: johayeriqbal@gmail.com</h2>
                <p className='text-xl mb-2'>Educational Background:</p>
                <ul className='leading-loose'>
                    <li>Studies Bsc in CSE at SouthEast University.</li>
                    <li>Diploma in Computer Technology from Institute Of Computer Science And Technology (Feni).</li>
                    <li>SSC form Kabi Jasim Udding High School (Noakhali).</li>
                </ul>
                <p className='text-xl mb-2'>Skills As Web Developer:</p>
                <div className='flex'>
                    <div>
                        <p>Frontend:</p>
                        <ul className='ml-10 leading-relaxed'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Responsive Design</li>
                            <li>JavaScript</li>
                            <li>JavaScript Frameworks: React</li>
                            <li>Css Frameworks: Vanilla Css, BootstrapCss, TailwindCss</li>
                        </ul>
                    </div>
                    <div>
                        <p>Backend:</p>
                        <ul className='ml-10 leading-relaxed'>
                            <li>NodeJs</li>
                            <li>Express</li>
                            <li>Database: MongoDb</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-2xl'>Live Sites</h2>
                    <p>https://nabil-production.web.app/</p>
                    <p>https://jersea-inv-man.web.app/</p>
                    <p>https://moto-monster.web.app/</p>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;