import React, {useEffect, useState} from 'react';
import HeaderComponent from './HeaderComponent';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';


const HomeComponent = () => {

    const [users, setUserObj] = useState([]);
    const [userDeleteObj, setDelete] = useState({});
    const [searchText , setSearchText] = useState('');

    const loadUsers = async() => {
         let res = await axios.get('https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch');
         let userObj = res.data.data;
         setUserObj(userObj); 
    }

    useEffect (()=>{
        loadUsers();
    }, []);

    const showDelete = (user) => {
        setDelete(user);
        document.getElementById('id01').style.display='block';
    }

    const hideDeletePopup = (user) => {
        setDelete({});
        document.getElementById('id01').style.display='none';
    }

    const deleteUser = async(user) => {
       
        let param = {email : userDeleteObj.email}
        let isEdit = await axios.post('https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete', param);
        loadUsers();
        document.getElementById('id01').style.display='none';
    }

    const searchTextInList = (val) => {
        let actualUserObj = users;
        console.log('searchText ==>', val)
       
        let searchedUsers = users.filter((user) => {
            console.log('user.first_name.', user.first_name.toLowerCase().indexOf(val.toLowerCase()))
            if(user.first_name.toLowerCase().indexOf(val.toLowerCase()) > -1)
                return user;
           
        })

        return searchedUsers;
    }

    const onSearchChange = (val) => {
        setSearchText(val);

       const searchListObj = searchTextInList(val);
        console.log('searchListObj', searchListObj)
      
    }

    //console.log('userDeleteObj', userDeleteObj)
    return (
        <div className="container">
            <div id="id01" className="modal">
                <form className="modal-content-form">
                    <div className="container modal-con">
                        <p>{`Are you sure you want to delete ${userDeleteObj.first_name} ${userDeleteObj.last_name} ?`}</p>
                        <div className="clearfix">
                            <button type="button" onClick={()=>deleteUser()} className= "btn btn-danger mr-2">Confirm</button>
                            <button type="button" onClick={()=>hideDeletePopup()} className= "btn btn-primary mr-2">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
            <div style={{height: "50px"}}>
                <div style={{float:"left"}} >
                    <NavLink to='/add' className="header-title" activeClassName="active">Add Record</NavLink>
                </div>
                <div style={{float:"right"}}>
                     <input type="text" 
                            class="form-control text-fields"  
                            placeholder="Search" 
                            name="search-text"
                            value={searchText}
                            style={{height: "25px"}} 
                            onChange={(e)=>onSearchChange(e.target.value)}
                    />
                </div>
            </div>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, inx) => {
                            return (
                                <tr key={inx}>
                                    <td>{inx+1}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.states}</td>
                                    <td>{user.city}</td>
                                    <td>{user.pincode}</td>
                                    <td>
                                        <NavLink to={`/edit/${inx}`} className= "btn btn-primary mr-2 custom-btn" activeClassName="active">Edit</NavLink>
                                        <button onClick={()=>showDelete(user)} className= "btn btn-danger custom-btn">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                  
               </tbody>
            </table>
        </div>
    )
}

export default HomeComponent;