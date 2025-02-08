# Firebase Data Access Before Data Load

This repository demonstrates a common error in Firebase applications: attempting to access data from a document snapshot before the data has finished loading.  This leads to unhandled promise rejections and runtime errors.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version that demonstrates proper promise handling.

**To reproduce the bug:**

1. Clone the repository.
2. Run `npm install` to install the necessary dependencies (Firebase SDK).
3. Run `node bug.js`.

You should see an error in the console.

**Solution:**

Refer to `bugSolution.js` for the corrected approach. The solution uses `await` to ensure the data is loaded before accessing it.