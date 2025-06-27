import './UserSelector.css';


export default function UserSelector({users , selectedUserId , onSelectUser}) {
    return (
        <div>
            <h3>User Selector</h3>
            <label htmlFor="Select-User"><strong>Select User:</strong></label> &nbsp;
            <select value={selectedUserId} onChange={(event) => onSelectUser(event.target.value)} className='select-user' id='Select-User'>
                <option value="" >Select User</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
        </div>
    )
}