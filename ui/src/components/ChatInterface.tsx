import React from 'react'

const ChatInterface = () => {
    return (
        <div className='w-2/3 mx-auto p-8'>
            <div className='text-2xl font-semibold'>Hello commander, <br />
                How can i help you ?</div>
            <div>
                <input type="text" name="prompt" id="prompt" className='border w-full mt-6 p-3 rounded-3xl' placeholder='type here...' onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        console.log(e.target.value);
                        e.target.value = ""
                    }
                }} />
            </div>
        </div>
    )
}

export default ChatInterface