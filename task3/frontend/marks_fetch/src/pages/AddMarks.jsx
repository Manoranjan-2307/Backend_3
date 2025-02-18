import React, { useState, useEffect } from 'react'
import '../styles/addMarks.css'
import UserDetails from '../components/UserDetails'
import { useNavigate } from 'react-router-dom';


export default function AddMarks() {

    const [subject1, setsubject1] = useState("");
    const [subject2, setsubject2] = useState("");
    const [subject3, setsubject3] = useState("");
    const [subject4, setsubject4] = useState("");
    const [subject5, setsubject5] = useState("");

    const [mark, setMarks] = useState([]);
    const [editMark, setEditMark] = useState(null);
    const [deleteMarkId, setDeleteMarkId] = useState(null);


    const navigate = useNavigate();
    const { user, login, logout } = UserDetails();
    const calculateTotal = () => {
        return (parseFloat(subject1) || 0) +
            (parseFloat(subject2) || 0) +
            (parseFloat(subject3) || 0) +
            (parseFloat(subject4) || 0) +
            (parseFloat(subject5) || 0);
    };
    const total = calculateTotal();

    console.log(total);

    const email = user.username;
    const handleSubmit = async (e) => {
      e.preventDefault()
        try {
            const res = await fetch("http://localhost:8081/add-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({subject1, subject2, subject3, subject4, subject5})

            })

            const data = await res.json();
            console.log(data);
            if (!res.ok) {
                throw new Error("HTTP Error");
            }
            fetchMarks();
            console.log("Added succesfully");

            

        } catch (error) {
            console.log(error);

        }
    }
    const fetchMarks = async () => {
        try {


            const res = await fetch("http://localhost:8081/fetch-marks", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },

            })

            const data = await res.json();
            setMarks(data.marks);
            console.log(data);
            if (!res.ok) {
                throw new Error("HTTP Error");
         }
            console.log("Fetched succesfully");

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMarks();
    }, []);
    return (
        <div className='addPageDiv'>
            <div className='addMarks'>
                <h3>Add marks: </h3>
                <form onSubmit={handleSubmit}>

                    <input type="number" placeholder='Enter mark 1' onChange={(e) => setsubject1(e.target.value)} required />

                    <input type="number" placeholder='Enter mark 2' onChange={(e) => setsubject2(e.target.value)} required />

                    <input type="number" placeholder='Enter mark 3' onChange={(e) => setsubject3(e.target.value)} required />

                    <input type="number" placeholder='Enter mark 4' onChange={(e) => setsubject4(e.target.value)} required />

                    <input type="number" placeholder='Enter mark 5' onChange={(e) => setsubject5(e.target.value)} required />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
            <div className='displayMarks'>
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Subject 1</th>
                        <th>Subject 2</th>
                        <th>Subject 3</th>
                        <th>Subject 4</th>
                        <th>Subject 5</th>
                        
                    </tr>
                    {mark.map((key, marks) => (
                        <tr key={marks}>
                            <td>{key.ID}</td>

                            <td>{key.Subject1}</td>
                            <td>{key.Subject2}</td>
                            <td>{key.Subject3}</td>
                            <td>{key.Subject4}</td>
                    <td>{key.Subject5}</td>
                    {/* <td>
                      <button onClick={() => setEditMark(key)}>Edit</button>
                      <button onClick={() => setDeleteMarkId(key.ID)}>Delete</button>
                    </td> */}

                            
                        </tr>
                    ))}
                    </tbody>
                    
                </table>

            </div>
            
        </div>

    )
}
