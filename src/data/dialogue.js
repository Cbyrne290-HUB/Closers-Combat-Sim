export const scenarios = [
  {
    opening: "I've seen your presentation, but I'm not sure if this is the right time for us to spend this much.",
    options: [
      { text: "I understand, when would be a better time?", trust: -10, authority: -10, response: "Probably never. We're busy." },
      { text: "What happens if you don't solve this problem right now?", trust: 5, authority: 15, response: "Well, we keep losing money, I suppose." },
      { text: "Is it a timing issue, or a certainty issue?", trust: 15, authority: 10, response: "I guess I'm just not sure if the ROI is there." }
    ]
  }
];