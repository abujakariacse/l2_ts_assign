# TypeScript Interview Questions – Blog Post

Welcome to this blog-style write-up covering two important TypeScript interview questions

---

## Topics Covered

1.  Differences Between `interface` and `type`
2.  Usage of `keyof` in TypeScript

---

## TypeScript: `interface` vs `type`

In TypeScript, both `interface` and `type` are used to describe the structure of data, particularly objects. However, they have some key differences in terms of flexibility and usage.

- **Interface**  
  Interfaces are ideal for defining object shapes and are easily extendable. They are especially useful when working with classes.

- **Type**  
  The `type` alias is more versatile. It can be used not just for objects, but also for unions, intersections, primitives, and more complex compositions. This makes it a powerful tool for crafting flexible type definitions.

## Usage of `keyof` in TypeScript

The `keyof` operator in TypeScript is a type operator that extracts the keys of a given type as a union of string literal types. It is often used to create type-safe code when working with object properties dynamically.

```ts
type Person = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person;
// Equivalent to: "name" | "age" | "location"
```
