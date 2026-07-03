function createLoginTracker(userInfo) {
  const MAX_ATTEMPTS = 3;
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    // Already locked (4th+ attempt)
    if (attemptCount >= MAX_ATTEMPTS) {
      return `Account locked due to too many failed login attempts`;
    }

    // Correct password
    if (passwordAttempt === userInfo.password) {
      attemptCount = 0;
      return `Login successful`;
    }

    // Wrong password — increment then return failed message
    attemptCount++;
    return `Attempt ${attemptCount}: Login failed`;
  };

  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};