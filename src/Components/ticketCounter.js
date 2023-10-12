import { useState } from "react";
import Security from "./security";


function  TicketCounter(){
    const [guests, setGuests] = useState([]);
    const [ticket, setTicket] = useState(null);

    const calculatePrice = (age) => {
        if (age <= 2) return 0;
        if (age < 18) return 100;
        if (age < 60) return 500;
        return 300;
      };
    
      const issueTicket = () => {
        const totalCharges = guests.reduce(
          (total, guest) => total + calculatePrice(guest.age),
          0
        );
        setTicket({
          guests: guests,
          totalCharges: totalCharges
        });
      };
    return (
        <>
        <h2>Ticket Counter</h2>
        <div>
        <h3>Enter Guest Details:</h3>
        <div>
          {guests.map((guest, index) => (
            <div key={index}>
              Guest {index + 1}: Age
              <input
                type="number"
                className="input-style"
                value={guest.age}
                onChange={(e) => {
                  const updatedGuests = guests.slice();
                  updatedGuests[index].age = parseInt(e.target.value);
                  setGuests(updatedGuests);
                }}
              />
            </div>
          ))}
        </div>
        <div className="button-container">
        <button className="button-style" onClick={() => setGuests([...guests, { age: 0 }])}>
          Add Guest
        </button>
        <button onClick={issueTicket} className="button-style">Issue Ticket</button>
        </div>
        {ticket && (
        <>
          <div>
            <h3>Issued Ticket:</h3>
            <p className="text-color">Total Charges: INR {ticket.totalCharges}</p>
          </div>
          <Security ticket={ticket} />
        </>
      )}
      </div>
        </>
    )
}

export default TicketCounter