import { useState } from 'react';

function Comment() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:8100/api/emails/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(url, fetchConfig);

        if (response.ok){
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }else {
            console.log("error sending email");
        }
    }

    const handleFormChange = async (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value
        });
    }


    return (
        <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleFormChange} required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    )
}

export default Comment
