// funct
// Chatbot function
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();
  // Questions and responses map
  const responses = {
      "hello": "Hello, nice to meet you!",
      "hi": "Hello, nice to meet you!",
      "hey": "Hello, nice to meet you!",
      "what is an  api":"An API (Application Programming Interface) is a way for two apps to talk to each other and share data or functions.",
      "how are you": "I'm doing fine, thank you for asking.",
      "what is your name": "My name is Jarvis, I'm a chatbot.",
      "what can you do": "I can chat with you and answer some simple questions.",
      "tell me a joke": "Why did the chicken go to the seance? To get to the other side.",
      "i have a question?": "Yes, I can help you to solve your question.",
      "who is the leader of this chatbot ai": "Priyesh is the leader of this chatbot AI.",
      "iiit manipur is better than all other iiits?": "NO, it is not better than all IIITs but it is good for engineering.",
      "is iiit manipur is better":"yes,it is better but iit is more better than iiits.",
      "what is the capital of india": "The capital of India is New Delhi.",
      "who is the prime minister of india": "The current Prime Minister of India is Narendra Modi.",
      "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
      "who invented the telephone": "Alexander Graham Bell is credited with inventing the telephone.",
      "what is 2 + 2": "2 + 2 is 4.",
      "value of 2+2":"2 + 2 is 4.",
      "value of 1000/10":"1000/10=100",
      "value of pie":"value of pie is approx=3.1415",
      "who is the father of india":"Matatma gandhi is a father of india.",
      "what is your purpose": "My purpose is to assist and provide helpful information to you."
  };
  for (let question in responses) {
      if (input.includes(question)) {
          output = responses[question];
          break;
      }
  }

  if (!output) {
      output = "Sorry, I don't understand that. Please try something else.";
  }

  return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}
// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
          displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
  }
}
document.getElementById("button").addEventListener("click", sendMessage);
document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
      sendMessage();
  }
});