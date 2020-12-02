const airport = [
    {airport: 'DFW International - Texas, USA', 'Traveled Through': true},
    {airport: 'Dallas Love Field - Texas, USA', travel: true},
    {airport: 'DFW International-Texas', travel: true},
    {airport: 'Taiwan Taoyuan International Airport - Taiwan', travel: true},
    {airport: "O'hare International - Chicago, Illinois", travel: true},
    {airport: 'Ninoy Aquino International - Manila, Philippines', travel: true},
    {airport: 'Hong Kong International Airport - Hong Kong', travel: true},
    {airport: 'Narita International Airport - Tokyo, Japan', travel: true},
    {airport: 'Haneda Airport - Tokyo, Japan', travel: true},
]

module.exports = {
    getAll: function() {
      return airport;
    }
  };