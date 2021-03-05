import React from 'react';

const HeaderComponent = () => {
    return (
            <div className="py-4">
                <div style={{float:"left"}}>Add Record</div>
                <div style={{float:"right"}}>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
    )

}

export default HeaderComponent;