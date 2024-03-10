export default function PostFormTextarea({ myRef }) {
    return (
        <div className='flex flex-col'>
            <label htmlFor="ArticleContent" className='mb-2 text-gray-500'>Article Content:</label>
            <textarea name="" id="ArticleContent" cols="30" rows="5" className='input' placeholder='Enter Article Content' ref={myRef}></textarea>
        </div>
    )
}