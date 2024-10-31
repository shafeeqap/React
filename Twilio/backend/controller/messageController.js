const twilio = require("twilio");

const createMessage = async (req, res) => {
  const { from, to, message } = req.body; 
  console.log(req.body);
  
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);
  try {
    const response = await client.messages.create({
      body: message || "Hello from Twilio WhatsApp!",
      from: `whatsapp:${from || process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:${to}`,
    });

    res.status(200).json({ success: true, response });

    console.log("Message Sent:", response.sid);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createMessage };
