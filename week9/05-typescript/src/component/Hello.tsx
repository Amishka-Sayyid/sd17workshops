// // Component with inline prop types
// export function Hello(props: { name: string }) {
//   return (
//     <div>
//       Hello {props.name} who is {props.age}
//     </div>
//   );
// }

// Component with separate prop type:
type HelloProps = {
  name: string;
  age: number;
};

export function Hello(props: HelloProps) {
  return (
    <div>
      Hello {props.name} who is {props.age}
    </div>
  );
}
