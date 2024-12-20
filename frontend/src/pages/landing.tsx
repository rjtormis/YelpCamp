import Header from "@/components/header";
import camping from "@/assets/camping.json";
import community from "@/assets/community.json";
import map from "@/assets/map.json";
import Lottie from "lottie-react";
import { ArrowRight, Backpack, CreditCard, Earth, Quote } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";
import useIsMobile from "@/hooks/useIsMobile";

function Landing() {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className=" flex-grow flex flex-col lg:flex-row px-4 gap-6 my-32 lg:px-32">
        <Lottie animationData={camping} loop={true} className="order-1 lg:order-2" />
        <section className="my-auto order-2 lg:order-1 ">
          <p className="flex gap-2  text-primary justify-center lg:justify-start lg:text-2xl ">
            Get your experience {!isMobile ? <ArrowRight className="my-auto" /> : null}
          </p>
          <p className=" text-xl text-center font-bold lg:text-6xl lg:text-left my-4 ">
            Feel the heart of <span className="text-primary">PHILIPPINES</span> ecotourism
          </p>
          <p className="text-center lg:text-left my-4 text-lg text-muted-foreground">
            Rediscover your soul and conscience as you explore the breathtaking beauty of life at
            our campsite. Immerse yourself in nature&apos;s wonders, and let us be your guide to an
            unforgettable experience.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button size="lg" className=" rounded-full">
              Get Started
            </Button>
          </div>
        </section>
      </div>

      <div className="py-24 px-32 flex flex-col lg:flex-row gap-8 justify-between bg-primary text-white">
        <div className="flex gap-4">
          <section className=" text-8xl">10</section>
          <div className="flex flex-col m-auto">
            <p className="text-2xl">Years of</p>
            <p>Experience</p>
          </div>
        </div>

        <div>
          <Separator className="bg-white" orientation={isMobile ? "horizontal" : "vertical"} />
        </div>

        <div className="flex gap-4">
          <section className=" text-8xl">1K</section>
          <div className="flex flex-col m-auto">
            <p className="text-2xl">Camping</p>
            <p>Destination</p>
          </div>
        </div>

        <div>
          <Separator className="bg-white" orientation={isMobile ? "horizontal" : "vertical"} />
        </div>

        <div className="flex gap-4">
          <section className=" text-8xl">8K</section>
          <div className="flex flex-col m-auto">
            <p className="text-xl">Happy</p>
            <p>Customers</p>
          </div>
        </div>

        <div>
          <Separator className="bg-white" orientation={isMobile ? "horizontal" : "vertical"} />
        </div>

        <div className="flex gap-4">
          <section className=" text-8xl">4.2</section>
          <div className="flex flex-col m-auto">
            <p className="text-2xl">Overall</p>
            <p>Rating</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-32">
        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-6xl text-center lg:text-left">
            That&apos;s The Way To Camp!
          </h2>
          <p className="text-xl text-muted-foreground text-center lg:text-left">
            Try a variety of benefits when using our services
          </p>
        </section>

        <section className="flex flex-col gap-2 m-auto text-center lg:text-left">
          <Earth size={42} strokeWidth={1.5} className="mx-auto lg:mx-0" />
          <h2 className="font-bold text-2xl">Lots of Choices</h2>
          <p className="text-muted-foreground">
            We have 1K+ camping destination that is working with us
          </p>
        </section>

        <section className="flex flex-col gap-2 m-auto text-center lg:text-left">
          <Backpack size={42} strokeWidth={1.5} className="mx-auto lg:mx-0" />
          <h2 className="font-bold text-2xl">Best Camp Guide</h2>
          <p className="text-muted-foreground">
            We have 1K+ camping destination that is working with us
          </p>
        </section>

        <section className="flex flex-col gap-2 m-auto text-center lg:text-left">
          <CreditCard size={42} strokeWidth={1.5} className="mx-auto lg:mx-0" />
          <h2 className="font-bold text-2xl">Easy Booking</h2>
          <p className="text-muted-foreground">
            We have 1K+ camping destination that is working with us
          </p>
        </section>
      </div>

      <div className="px-32">
        <div className="flex flex-col lg:flex-row gap-4 my-8 lg:my-0 ">
          <Lottie animationData={map} alt="" />
          <div className="m-auto flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-center lg:text-left">
              Forest, Starry Night, Campfire, What Else Do You Need?
            </h2>
            <p className="text-muted-foreground text-center lg:text-left">
              Explore more than 1k+ camping destinations, find your most comfortable place to camp
              and book now
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <Lottie animationData={community} alt="" className="order-1 lg:order-2" />
          <div className="m-auto  flex flex-col gap-4 order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-center lg:text-left">
              Community Service Is Calling, No Need For Stalling.
            </h2>
            <p className="text-muted-foreground text-center lg:text-left">
              Want more fun camping? Join our community to get friends to camp together and share
              and feel the sensation.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className=" rounded-full">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-32">
        <h2 className="text-4xl font-bold my-8 text-center">Our Customers Are Our Best Ads</h2>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-24">
          <div className="p-8">
            <Quote strokeWidth={1} size={18} className="text-primary my-4" />

            <p className="my-4">
              Thanks to YelpCamp I can now realize my dream of camping around the Philippines
            </p>
            <Separator className="text-primary" />

            <div className="my-4 flex gap-4">
              <Avatar className="my-auto">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <p className="font-bold">Shad</p>
                <p className="text-muted-foreground">Frontend Engineer</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <Quote strokeWidth={1} size={18} className="text-primary my-4" />

            <p className="my-4">
              Thanks to YelpCamp I can now realize my dream of camping around the Philippines
            </p>
            <Separator className="text-primary" />

            <div className="my-4 flex gap-4">
              <Avatar className="my-auto">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <p className="font-bold">Shad</p>
                <p className="text-muted-foreground">Frontend Engineer</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <Quote strokeWidth={1} size={18} className="text-primary my-4" />

            <p className="my-4">
              Thanks to YelpCamp I can now realize my dream of camping around the Philippines
            </p>
            <Separator className="text-primary" />

            <div className="my-4 flex gap-4">
              <Avatar className="my-auto">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <p className="font-bold">Shad</p>
                <p className="text-muted-foreground">Frontend Engineer</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="p-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-center">Got A Question for YelpCamp?</h2>
          <p className="text-center lg:text-left">
            Feel free to ask us questions, we will accomodate you as soon as possible
          </p>
          <Input placeholder="Enter your Email" className="w-full lg:w-[70%] rounded-full" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center lg:text-left">
            Maybe your questions have been asnwered, check this out.
          </h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
