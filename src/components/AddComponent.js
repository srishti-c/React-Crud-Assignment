import React, {useState} from 'react';
import {useHistory, NavLink} from 'react-router-dom';
import axios from 'axios';

const AddComponent = (props) => {
    const history = useHistory();

    const [user, setUser] = useState({
        first_name : '',
        last_name : '',
        email : '',
        states : '',
        city : '',
        pincode : ''
    });

    const onInputChange = (e) => {
        console.log('e.target.name, e.target.value', e.target.name, e.target.value)
        setUser({...user, [e.target.name] : e.target.value})
       // console.log('e ==>', e)
    }

    const onSubmit = async(e) => {
        e.preventDefault();
       let isInserted = await  axios.post('https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add', user);
       history.push('/')
    }

    return (
        <div className="container">
          
                <form onSubmit= {(e)=>onSubmit(e)}>
                    <div className="container add-main-div">
                        <div className="form-group mr-2">
                            <label>First Name</label>
                            <input type="text"
                                
                                className="form-control text-fields"  
                                placeholder="First Name" 
                                name="first_name"
                                value={user.first_name} 
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div className="form-group mr-2">
                            <label >Last Name</label>
                            <input type="text" 
                                className="form-control text-fields"  
                                placeholder="Last Name" 
                                name="last_name"
                                value={user.last_name} 
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div className="form-group mr-2">
                        
                            <label >Email </label>
                            <input type="email" 
                                class="form-control text-fields"  
                                placeholder=" @example.com" 
                                name="email"
                                value={user.email} 
                                onChange={(e)=>onInputChange(e)}    
                            />
                        </div>

                        <div className="form-group mr-2">
                            <label >State</label>
                            <select value={user.states} name="states" className="form-control text-fields" onChange={(e)=>onInputChange(e)} >
                               <option value="Goa">Goa</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Maharastra">Maharastra</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                        </div>
                        <div className="form-group mr-2">
                            <label >City</label>
                            <input type="text" 
                                className="form-control text-fields"  
                                placeholder="City" 
                                name="city"
                                value={user.city} 
                                onChange={(e)=>onInputChange(e)}     
                            />
                        </div>
                        <div className="form-group mr-2">
                            <label >Pincode </label>
                            <input type="text" 
                                maxLength="5"
                                minLength = "5"
                                class="form-control text-fields"  
                                placeholder="Pincode" 
                                name="pincode"
                                value={user.pincode} 
                                onChange={(e)=>onInputChange(e)}      
                            />
                        </div>
                </div>
                <div className="footer-div">
                    <button className= "btn btn-primary mr-2 custom-btn"> Add</button>
                    <NavLink to='/' className="btn btn-danger custom-btn"> cancel</NavLink>
                </div>
            </form>
        </div>
    )

}

export default AddComponent;