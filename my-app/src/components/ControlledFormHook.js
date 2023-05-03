import React, {useState} from 'react'

function ControlledFormHook() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Website')
    const [comment, setComment] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name, category, comment)
    }

    return (
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select
                        id="id-category"
                        name="category"
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                    >
                        <option value="website">Website Issue</option>
                        <option value="order">Order Issue</option>
                        <option value="general">General Enquiry</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        id="id-comments"
                        name="comments"
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHook