const calculateDeathProbability = (deceleration) => {
  switch (true) {
    case deceleration < 10 && deceleration >= 0:
      return 0;
    case deceleration < 15:
      return 5;
    case deceleration < 20:
      return 10;
    case deceleration < 25:
      return 35;
    case deceleration < 30:
      return 42;
    case deceleration < 35:
      return 62;
    case deceleration < 40:
      return 80;
    case deceleration < 45:
      return 87;
    case deceleration < 50:
      return 95;
    case deceleration < 55:
      return 98;
    case deceleration >= 55:
      return 0;
    default:
      return 0;
  }
};

export default calculateDeathProbability;
