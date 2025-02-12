import MyComponent from "@/components/MyComponent";
import { AnimateIn } from "@/components/AnimateIn";
import ExitAnimation from "@/components/ExitAnimation";
export default function HomePage() {
  return (
    <>
      <h1>Motion Workshop</h1>
      <MyComponent />

      <AnimateIn />

      <ExitAnimation />
    </>
  );
}
