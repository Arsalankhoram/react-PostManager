export default function PostFormSelect({myRef}) {
    return (
        <div className='flex flex-col'>
                <label htmlFor="ArticleCategury" className='mb-2 text-gray-500'>Article Categury:</label>
                <select name="ArticleCategury" id="ArticleCategury" className='input' ref={myRef} >
                    <option value="Visit Card">Visit Card</option>
                    <option value="NFC Card">NFC Card</option>
                    <option value="Metal ard">Metal Card</option>
                </select>
            </div>
    )
}