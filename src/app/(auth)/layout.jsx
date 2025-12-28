import React from 'react';

const authLayout = ({ children }) => {
    return (
        <div className='flex min-w-screen gap-5'>
            <div className='flex-2'>
                {children}
            </div>
            <div className='flex-1 bg-sky-600 min-h-screen'>
                <div className='flex justify-center items-center h-full'>
                    <h2 className='text-4xl font-bold text-white'>Welcome for authentication</h2>
                </div>
            </div>
        </div>
    );
};

export default authLayout;