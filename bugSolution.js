function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle non-numeric values
  }

  return a + b;
}