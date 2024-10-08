const otpManager = require('node-twillo-otp-manager')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    process.env.TWILIO_SERVICE_SID

);
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Run this /test API first to get the Service SID for the env file
app.post('/test', async (req, res) => {
    try {
        // Create a Service SID
        const serviceSid = await otpManager.createServiceSID('appCleaning', '4');
        
        // Log the Service SID to the console
        console.log('serviceSid:', serviceSid);
        
        // Return the Service SID in the response
        res.json({ success: true, message: 'Service SID created', serviceSid });
    } catch (error) {
        // Log the error and return an error response
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to create Service SID', error: error.message });
    }
});

// Send OTP
app.post('/send', async (req, res) => {
    try {
        const { countryCode, mobile } = req.body; // Extract from req.body
        const phone = countryCode + mobile; // Combine country code and mobile
        console.log('Sending OTP to:', phone); // Log the phone number being used
        try {
            var resp = await otpManager.sendOTP(phone);
        } catch (error) {
            res.status(500).json({ success: false, message: 'Number is not valid', error: error.message });
        }
        res.json({ success: true, message: 'OTP sent', data: resp });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to send OTP', error: error.message });
    }
});

// Verify OTP
app.post('/verify', async (req, res) => {
    try {
        const { mobileNumber, otp } = req.body; // Extract mobileNumber and OTP from req.body
        
        // Assuming `isMobileExist` is retrieved from DB or another source
        const isMobileExist = { dataValues: { countryCode: '+' } }; // Placeholder for real data
        const formattedMobileNumber = isMobileExist.dataValues.countryCode === null
            ? '+' + mobileNumber
            : isMobileExist.dataValues.countryCode + mobileNumber;

        const resp = await otpManager.verifyOTP(formattedMobileNumber, otp);

        res.json({ success: true, message: 'OTP verified', data: resp });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to verify OTP', error: error.message });
    }
});
