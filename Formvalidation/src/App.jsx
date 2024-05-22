import { useState } from 'react'
import './App.css'

function App() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState('');
    const [textarea, setTextarea] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [courseError, setCourseError] = useState('');
    const [textareaError, setTextareaError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Regular expressions
        const nameExp = /^[a-zA-Z ]{3,15}$/;
        const emailExp = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]{2,5}$/;
        const phoneExp = /^[0-9]{10}$/;
        const textareaexp = /^[a-zA-Z0-9]{2,100}$/;

        // Validation logic
        if (!name.match(nameExp)) {
            setNameError("Fill name properly");
        } else {
            setNameError("");
        }

        if (!phone.match(phoneExp)) {
            setPhoneError("Fill phone number properly");
        } else {
            setPhoneError("");
        }

        if (!email.match(emailExp)) {
            setEmailError("Fill email properly");
        } else {
            setEmailError("");
        }

        if (!gender) {
            setGenderError("Check one option");
        } else {
            setGenderError("");
        }

        if (!course) {
            setCourseError("Select a value");
        } else {
            setCourseError("");
        }

        if (!textarea.match(textareaexp)) {
            setTextareaError("Type your hobbies");
        } else {
            setTextareaError("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className='forms'>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <div className="error">{nameError}</div>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <div className="error">{phoneError}</div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email-:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="error">{emailError}</div>
            </div>
            <div className="form-group">
              
                <label>Gendre:</label>
                <input type="radio" id="male" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" name="gender" value="other" onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="other">Other</label>
                <div className="error">{genderError}</div>
            </div>
            <div className="form-group">
                <label htmlFor="course">Cours.:</label>
                <select id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
                    <option value="">Select a course</option>
                    <option value="course1">Course 1</option>
                    <option value="course2">Course 2</option>
                    <option value="course3">Course 3</option>
                </select>
                <div className="error">{courseError}</div>
            </div>
            <div className="form-group">
                <label htmlFor="textarea">Hobbi.:</label>
                <textarea id="textarea" value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
                <div className="error">{textareaError}</div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};



export default App
