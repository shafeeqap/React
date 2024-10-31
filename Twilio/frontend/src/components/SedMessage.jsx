import axios from "axios";
import { useState } from "react";

const SedMessage = () => {
  // const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/send-message", {
        to,
        message,
      });
      console.log('Response', response);
      setStatus(`Message sent! SID: ${response.data.response.sid}`);
    } catch (error) {
      setStatus(`Error: ${error.response.data.error}`);
      console.log(error.message);
    }
  };

  return (
    <div className="md:min-w-[400px] mx-auto bg-slate-600">
      <div className="p-5 text-center font-bold text-lg">
        <h2>Send WhatsApp Message</h2>
      </div>
      <div className="w-full p-5">
        <form onSubmit={handleSendMessage}>
          {/* <div className="m-3">
            <input
              type="text"
              placeholder="Your WhatsApp Number"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              // required
              className="p-2 rounded w-full text-sm sm:text-lg md:text-base"
            />
          </div> */}

          <div className="m-3">
            <input
              type="text"
              placeholder="Recipient's WhatsApp Number"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
              className="p-2 rounded w-full text-sm sm:text-lg md:text-base"
            />
          </div>
          <div className="m-3">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="p-2 rounded w-full text-sm sm:text-lg md:text-base"
            />
          </div>
          <div className="flex justify-center m-3 ">
            <button type="submit" className="bg-blue-500 p-2 rounded w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SedMessage;
