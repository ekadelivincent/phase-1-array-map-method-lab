function titleCased() {
  const tutorials = [
    "What Does The This Keyword Mean?",
    "What Is The Constructor OO Pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What Is NaN And How Can We Check For It",
    "What Is The Difference Between StopPropagation And PreventDefault?",
    "Immutable State And Pure Functions",
    "What Is The Difference Between == And ===?",
    "What Is The difference Between Event Capturing and Bubbling?",
    "What Is JSONP?"
  ];

  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
}

