import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-slate-200 h-screen flex items-center justify-center'>
        <div className="bg-white rounded-lg w-1/4 flex flex-col p-8 gap-5">
          <h2 className='text-center font-bold text-xl'>Post Manager Form</h2>
          <div className='flex flex-col'>
            <label htmlFor="ArticleName" className='mb-2 text-gray-500'>Article Name:</label>
            <input type="text" placeholder='Enter Article Title' className='input' id='ArticleName' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="ArticleCategury" className='mb-2 text-gray-500'>Article Categury:</label>
            <select name="ArticleCategury" id="ArticleCategury" className='input'>
              <option value="" disabled selected>Select Article Categury</option>
              <option value="Visit Card">Visit Card</option>
              <option value="NFC Card">NFC Card</option>
              <option value="Metal ard">Metal Card</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="ArticleContent" className='mb-2 text-gray-500'>Article Content:</label>
            <textarea name="" id="ArticleContent" cols="30" rows="5" className='input' placeholder='Enter Article Content'></textarea>
          </div>
          <button type='submit' className='mb-2 text-white  p-3 bg-green-600 rounded-sm hover:bg-green-700 transition-all duration-300	' >Save and Submit</button>
        </div>
      </div >
    </>
  )
}

export default App
