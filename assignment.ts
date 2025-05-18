function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper == undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

type Book = { title: string; rating: number };

function filterByRating(items: Book[]): Book[] {
  const filteredBooks: Book[] = items.filter((item: Book) => item.rating >= 4);
  return filteredBooks;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  let mostExpensive: Product = products[0];

  for (const product of products) {
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }
  }
  return mostExpensive;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (n > 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject("Negative number not allowed");
    }
  });
}
