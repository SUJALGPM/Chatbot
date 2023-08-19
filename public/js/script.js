var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');
var user = { message: "" };

var arrayOfPossibleMessage = [
    { message: "hi", response: "hello, how may I assist you?" },
    { message: "hii", response: "hello, how may I assist you?" },
    { message: "hello", response: "hello, how may I assist you?" },
    { message: "hey", response: "hello, how may I assist you?" },
    { message: "jaundice", response: "take dolo" },
    { message: "stomach pain", response: "sala" },
    { message: "how are you?", response: "I'm fine, thanks for your concern" },
    { message: "what is your name?", response: "I'm a Healthbot" },
    { message: "where are you from?", response: "I'm from the Medicare website." },
    { message: "hand pain", response: "gel" },
    { message: "cold and cough", response: "paracetamol" },
    { message: "cough", response: "kingfisher" },
    { message: "i have a fever", response: "paracetamol" },
    { message: "Creator of this chatbot?", response: "Shreeya Nemade & Harsha Surwase" }
    // ... (add more message data as needed)
];

function sendMessage(userMessage) {
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = 'right';
    messageElement.style.margin = '10px';
    messageElement.innerHTML = "<span> You:  </span>" + "<span>" + userMessage + "</span>";
    chatContainer.appendChild(messageElement);
}

function chatbotResponse(userMessage) {
    var chatbotmessage = "";
    var matchedResponse = null;

    if (userMessage.length > 0 || userMessage === "hi") {
        var exactMatchedResponse = arrayOfPossibleMessage.find(val => val.message.toLowerCase() === userMessage.toLowerCase());

        if (exactMatchedResponse) {
            matchedResponse = exactMatchedResponse.response;
        } else {
            var wordsInUserMessage = userMessage.toLowerCase().split(" ");

            for (var i = 0; i < wordsInUserMessage.length; i++) {
                var word = wordsInUserMessage[i];

                var matchedWordResponse = arrayOfPossibleMessage.find(val => val.message.toLowerCase().includes(word));

                if (matchedWordResponse) {
                    matchedResponse = matchedWordResponse.response;
                    break;
                }
            }
        }

        if (matchedResponse) {
            chatbotmessage = matchedResponse;
        } else {
            chatbotmessage = "please send another message";
        }
    } else {
        chatbotmessage = "please send different message";
    }

    var messageElement = document.createElement('div');
    messageElement.style.margin = '10px';
    messageElement.innerHTML = "<span> Chatbot: </span>" + "<span>" + chatbotmessage + "</span>";

    setTimeout(() => {
        messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}

sendBtn.addEventListener('click', function (e) {
    var userMessage = textbox.value;
    if (userMessage == "") {
        alert('please type a message');
    } else {
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
    }
});
