


function Security(props) {
    const { ticket } = props;

    return (
        <div>
            <h2>Security</h2>
            {ticket && (
                <div>
                    <h3>Validate Ticket:</h3>
                    <p>Total Chargessss: INR {ticket.totalCharges}</p>
                    <h4>Guests:</h4>
                    {ticket.guests.map((guest, index) => (
                        <p key={index}>
                            Guest {index + 1} (age: {guest.age})
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Security