import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface DonationProps {}

const Donation: React.FC<DonationProps> = () => {
  const [name, setName] = useState<string>(''); 
  const [amount, setAmount] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('http://localhost:8081/Donation', { name, amount })
    .then((res) => {
      console.log("data inputed:", res.data);
      navigate('/Donation');
    })  
    .catch(err => console.log(err));
  
  } 

  return (
    <div className="main-content">
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h1>DONATION</h1>
          <div className='mb-2'>
            <label htmlFor="amount">Enter Amount</label>
            <input
              type="text"
              id="amount"
              placeholder='Enter Amount'
              className='form-control'
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Enter your Name</label>
            <input
              type="text"
              id="name"
              placeholder='Enter your Name'
              className='form-control'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Donation;
