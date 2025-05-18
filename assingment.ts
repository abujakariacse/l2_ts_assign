function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper == undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
