import './UserSelector.css';

export default function UserSelector({users , selectedUserId , onSelectUser}) {
    return (
        <div className="user-selector-container">
            <h3 className="user-selector-title">👤 User Selector</h3>
            <label htmlFor="Select-User" className="user-selector-label">Select User:</label>
            <select value={selectedUserId} onChange={(event) => onSelectUser(event.target.value)} className='select-user' id='Select-User'>
                <option value="" >Choose a user...</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
        </div>
    )
}