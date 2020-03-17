import React from 'react';

const SessionsTableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Book</th>
                <th>Time in Minutes</th>
                <th>Notes</th>
            </tr>
        </thead>
    );
}

const SessionsTableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.book}</td>
                <td>{row.timeMinutes}</td>
                <td>{row.notes}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>
}

class SessionsTable extends React.Component {
    render() {
        const { characterData } = this.props;

        return (
            <table>
                <SessionsTableHeader />
                <SessionsTableBody characterData={characterData} />
            </table>
        );
    }
}

export default SessionsTable