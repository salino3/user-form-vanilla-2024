export function executingPage() {
  return new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      reject("Error: " + error);
    }
  });
}
