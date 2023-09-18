import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectAllUser } from '../../store/userStoreSlice/UserStore';

const UserExample = () => {

    const [userName, setUserName] = useState<string>();

    const dispatch = useDispatch();
    const allUser = useSelector(selectAllUser);

    const addUserFx = () => {
        userName && dispatch(addUser(userName))
    }

    return (
        <div>

            <input type="text" 
                onChange={(e)=>setUserName(e.target.value)}
            />
            <button onClick={addUserFx}>add</button>

            {
                allUser &&
                    allUser.map((user, index) => {
                        return (
                            <p key={index}>{user.name}</p>
                        )
                    })
            }
        </div>
    )
}

export default UserExample