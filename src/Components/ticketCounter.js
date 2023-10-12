import { useState } from "react";


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
        <button onClick={() => setGuests([...guests, { age: 0 }])}>
          Add Guest
        </button>
        <button onClick={issueTicket}>Issue Ticket</button>
      </div>
        </>
    )
}

export default TicketCounter