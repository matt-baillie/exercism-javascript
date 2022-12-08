//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();
  if (!message) {
    return "Fine. Be that way!";
  } else if (message.lastIndexOf("?") === message.length - 1) {
    if (
      message === message.toUpperCase() &&
      message !== message.toLowerCase()
    ) {
      return "Calm down, I know what I'm doing!";
    }
    return "Sure.";
  } else if (
    message === message.toUpperCase() &&
    message !== message.toLowerCase()
  ) {
    return "Whoa, chill out!";
  } else {
    return "Whatever.";
  }
};
