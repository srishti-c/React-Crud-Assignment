import React from 'react';
import {Link} from 'react-router-dom';

const NavComponent = () => {
    return (
            <div className="nav-class">
                <div style={{float:"left"}} className="task-class">Task</div>
                <div style={{float:"right"}}>
                  <Link exact to="/" className="task-class" style={{fontWeight:"normal"}}> Home </Link>
                </div>
            </div>
    )

}

export default NavComponent;