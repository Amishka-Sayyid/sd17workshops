import { Hello } from "@/component/Hello";
import { Hello2 } from "@/component/Hello2";
export default function HomePage() {
  return (
    <>
      <h1>Typescript Workshop</h1>
      <Hello name="World" age={23} />
      <Hello2 name="amina" age={26} />
    </>
  );
}
