import { useRef, useState } from "react"
import PostFormTextInput from "./PostFormTextInput"
import PostFormSelect from "./PostFormSelect"
import PostFormTextarea from "./PostFormTextarea"

export default function CreactPostFrom() {

    let formValue = {
        title: "arsalan",
        categury: "NFC Card",
        content: "content"
    }

    let titleValue = useRef(null)
    let categuryValue = useRef(null)
    let contentValue = useRef(null)
    let submitRef = useRef(null)

    const [seccessMessage, setseccessMessage] = useState("none")


    const submit = () => {
        formValue.title = titleValue.current.value
        formValue.categury = categuryValue.current.value
        formValue.content = contentValue.current.value

        console.log(formValue);

        fetch('https://65edc6d408706c584d9a9190.mockapi.io/Posts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(formValue)
        })
            .then(response => {
                if (response.ok) {
                    console.log(response.json());
                    setseccessMessage("block")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-white rounded-lg w-1/4 flex flex-col p-8 gap-5">
            <h2 className='text-center font-bold text-xl'>
                Post Manager Form
            </h2>
            <PostFormTextInput myRef={titleValue} />
            <PostFormSelect myRef={categuryValue} />
            <PostFormTextarea myRef={contentValue} />
            <button type='submit' className='mb-2 text-white  p-3 bg-green-600 rounded-sm hover:bg-green-700 transition-all duration-300' ref={submitRef} onClick={submit}>
                Save and Submit
            </button>
            <p style={{ display: seccessMessage }}>Data Saved to Database.</p>
        </div>
    )
}