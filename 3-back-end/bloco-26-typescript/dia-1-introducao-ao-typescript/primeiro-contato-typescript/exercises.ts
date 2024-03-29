// ./exercises.ts

export function greeter(name: string):string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

// ex01
export function lozenge(higherDiagonal: number, lowerDiagonal: number): number {
  return (higherDiagonal * lowerDiagonal) / 2;
}

// ex02
export function trapeze(minorBase: number, majorBase: number, height: number): number {
  return ((minorBase + majorBase) * height) / 2;
}
