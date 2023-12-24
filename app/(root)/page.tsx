import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h2 className="h1-bold">
              Host,Connect,Celebrate:Your Events,Our Platform!
            </h2>
            <p className="p-regular-20 md:p-regular-24">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus necessitatibus optio voluptatibus officia animi
              perferendis, ad perspiciatis in laborum odit hic aliquam? Aut
              ipsam ea placeat ab, aliquid recusandae veniam!
            </p>
            <Button size={"lg"} asChild className="button w-full sm:w-fit ">
              <Link href={"/events"}>Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=" mt-10 max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          ></Image>
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted By <br /> Thousand Of Events
        </h2>
        <div className="flex w-full flex-co gap-5 md:flex-row">
          Search Category
        </div>
      </section>
    </>
  );
}
