import React from 'react'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='animate-spin border-4 border-t-transparent w-16 h-16 rounded-full border-red-300 scale-200'></div>
        </div>
    )
}

export default Loading
Loading