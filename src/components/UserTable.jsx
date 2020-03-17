import React from 'react';

const UserTableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </thead>
    );
}

const UserTableBody = props => {
    const rows = props.userData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.gender}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>
}

class UserTable extends React.Component {
    render() {
        const { userData } = this.props;

        return (
            <table>
                <UserTableHeader />
                <UserTableBody userData={userData} />
            </table>
        );
    }
}

export default UserTable