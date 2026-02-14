import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const placeholders = [
    { label: "Photo 1", src: "/images/img1.jpg", classes: "top-15 left-28 -rotate-6" },
    { label: "Photo 2", src: "/images/img2.jpg", classes: "top-20 right-28 rotate-6" },
    { label: "Photo 3", src: "/images/img3.jpg", classes: "top-1/2 -translate-y-1/2 left-16 -rotate-3" },
    { label: "Photo 4", src: "/images/img4.jpg", classes: "top-1/2 -translate-y-1/2 right-16 rotate-3" },
    { label: "Photo 5", src: "/images/img5.jpg", classes: "bottom-20 left-28 rotate-4" },
    { label: "Photo 6", src: "/images/img6.jpg", classes: "bottom-15 right-28 -rotate-4" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-pink-200">
      {placeholders.map((item, index) => (
        <div key={item.label} className={`absolute ${item.classes}`}>
          <div
            className={`${styles.floatCard} relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-2xl border-4 border-pink-100/80 bg-pink-100/70 text-base font-semibold text-pink-900 sm:h-48 sm:w-48`}
            style={{ animationDelay: `${index * 0.45}s` }}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, 192px"
            />
          </div>
        </div>
      ))}

      <div className="flex mt-20 flex-col items-center justify-center px-16 mb-10">
        <h1 className="mb-7 w-full max-w-xl text-left text-8xl text-black font-[family-name:var(--font-allura)]">
          Dear Caroline,
        </h1>
        <div className="w-full max-w-xl rounded-2xl border-pink-100 bg-pink-50/90 p-12 text-left text-lg font-medium leading-relaxed text-gray-700">
          I’m writing this in pitch black at 2 am in a hostel two blocks away from the San Sebastian coastline. Basque Country has been absolutely stunning, if not cruel at times (many umbrellas were broken and shoes ruined from the monsoon). I’ll be heading to Morocco soon, hopefully Italy, Greece, and France in a couple of weeks as well, and I’ll make sure to send you tons of pictures.
          <br></br> <br></br>
          Thinking of what to get you for Valentines Day has been a struggle because I have zero clue how to ship anything physical back to the States. That morse code necklace was your anniversary present, and even though you just got it (and it looks so beautiful on you), I don’t want to cop out and count that for Valentines Day as well. But then I remembered that I can make websites! So hopefully this e-card works as your V-Day present.
          <br></br> <br></br>
          Basically, I just wanted to tell you that I love you. I love your laugh when I tickle you, or when you laugh at your own joke so hard you start wheezing (even though it isn’t funny). I love it when you’re so excited to tell me about your day. I love your obsession with St. Chroma and lack thereof with Sir Beaudelar the Bear. I love how dedicated and hardworking you are, even though you really need to go easier on yourself and trust that things will work out. I love when we go on our walks on the Congaree River and enjoy each others presence. I love that you want to try things with me (including backpacking, which you’re probably gonna regret once we do it). I love it when you cuddle up with me at night, even when I have an insane and demoralizing day, making me feel accomplished for at least one thing: having a girlfriend better than every man could ask for.
          <br></br> <br></br>
          I know life has been stressful for you lately (for, to be honest, all of undergrad), but you’ll get through all of this with a doctoral diploma in your left hand and my hand in your right. And hopefully one day you’ll join me out here in the Basque countryside, overlooking the perfectly blue waves as I look into the swamp green eyes of my loving wife.
          <br></br> <br></br>
          <strong className="text-2xl">Sincerely yours,</strong> <br></br>
          <span className="font-[family-name:var(--font-allura)] text-4xl text-pink-900">OBC</span>
        </div>
      </div>
    </main>
  );
}
