class Formatter {
  //add static methods here
  static capitalize(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }

  static sanitize(e) {
    return e.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(e) {
    const noWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];

    const answer = [];
    const newArray = e.split(" ");
    for (let i = 0; i < newArray.length; i++) {
      if (i === 0) {
        answer.push(this.capitalize(newArray[i]));
      } else {
        if (noWords.includes(newArray[i])) {
          answer.push(newArray[i]);
        } else {
          answer.push(this.capitalize(newArray[i]));
        }
      }
    }
    return answer.join(" ");
  }
}
