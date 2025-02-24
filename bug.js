function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }

  return a + b; // This will cause an error if a or b are not numbers
}