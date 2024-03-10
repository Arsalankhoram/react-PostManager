export default function PostFormTextInput({myRef}) {
    return (
        <div className='flex flex-col'>
            <label htmlFor="ArticleName" className='mb-2 text-gray-500'>Article Name:</label>
            <input type="text" placeholder='Enter Article Title' className='input' id='ArticleName' ref={myRef} />
        </div>
    )
}