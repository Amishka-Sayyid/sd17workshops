import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <h1> Birds</h1>
      <h2>Where birds are happy and fluffy</h2>
      <Image
        src="/assets/flamingoes.jpg"
        alt={"Flamingoes in the sea"}
        width={500}
        // height="fill"
        height={300}
        priority="false"
        placeholder="blur"
        blurDataURL="https://images.newscientist.com/wp-content/uploads/2020/12/18142851/why-are-flamingos-pink-mpxhm1_web.jpg?crop=4:3,smart&width=1200&height=900&upscale=true"
      />
      <Image
        src={
          "https://i.natgeofe.com/k/4e367aea-cc74-4e2e-a100-f22df7390496/flamingo-group_square.jpg"
        }
        alt={"A pigeon flying on a lake"}
        width={500}
        height={250}
        priority="false"
      />
    </>
  );
}
