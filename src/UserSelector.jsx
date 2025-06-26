import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './UserSelector.css';


export default function UserSelector({users , selectedUserId , onSelectUser}) {
    return (
        <div>
            <h3>User Selector</h3>
            <label htmlFor="Select-User"><strong>Select User:</strong></label> &nbsp;
            <Select value={selectedUserId} onChange={(event) => onSelectUser(event.target.value)} className='select-user'>
                <option value="" >Select User</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </Select>
        </div>
    )
}