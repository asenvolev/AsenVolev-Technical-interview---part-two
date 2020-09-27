import React, { Fragment, useState } from 'react';

const editableUserProps = ['name', 'username', 'email', 'address.street', 'address.suite', 'address.city', 'phone', 'website'];

export const UserProp = ({objKey, objValue, onObjValueChanged}) => {

    if(typeof(objValue) == "object"){
        return Object.keys(objValue).map(prop => {
            const propName = objKey + '.' + prop;
            return <UserProp key={prop} objKey={propName} objValue={objValue[prop]} onObjValueChanged={onObjValueChanged}/>
        });
    }

   const isDisabled = !editableUserProps.includes(objKey);

    return( 
        <div>
            <label htmlFor={objKey}>{objKey}:</label>
            <input
                type="text"
                id={objKey}
                name={objKey}
                value={objValue}
                onChange={onObjValueChanged}
                disabled={isDisabled}
            />
        </div>
    )
}