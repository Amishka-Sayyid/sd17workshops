// Component with deconstructed props:
type HelloProps2 = {
  name: string;
  age: number;
};

export function Hello2({ name, age }: HelloProps2) {
  return (
    <div>
      Hello {name} who is {age}
    </div>
  );
}
