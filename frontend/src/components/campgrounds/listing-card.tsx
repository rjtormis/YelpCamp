import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import sampleimage from "@/assets/landing1.jpg";
import {
  Badge,
  BarChart,
  Fish,
  Flame,
  FlameKindling,
  Footprints,
  Map,
  StarIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { RxDoubleArrowRight } from "react-icons/rx";

function ListingCard() {
  return (
    <Card className="border-none hover:cursor-pointer hover:bg-white hover:text-black flex flex-col h-auto">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl text-center">
          <div className="relative">
            <div className="">
              <img
                src={sampleimage}
                alt=""
                className="w-full h-[200px] rounded-t-lg object-cover"
              />
              <div className="absolute w-full bottom-0 left-0 flex justify-between p-2">
                <Badge className="rounded-xl">Public</Badge>
                <Badge className="flex bg-white text-black rounded-xl">
                  <StarIcon className="my-auto text-primary" />{" "}
                  <span className="text-sm ml-1">4.9</span>
                </Badge>
              </div>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="flex justify-between px-4">
          <span className="text-lg font-bold">AJ Corporation</span>
          <span className="text-lg">199$</span>
        </CardDescription>
      </CardHeader>
      <CardContent className=" my-2 px-4 py-0">
        <div>
          <div className="flex">
            <Map className="w-[18px] h-[18px] my-auto mr-1 text-primary" />
            <span>Some location</span>
          </div>
          <div className="flex">
            <BarChart className="w-[18px] h-[18px] my-auto mr-1 text-primary" />
            <span>Available</span>
          </div>

          <div className="flex">
            <Flame className="w-[18px] h-[18px] my-auto mr-1 text-primary" />
            <span>1000 favorites</span>
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <h2 className="text-sm font-bold underline">Amenities</h2>
          <div className="flex gap-2">
            <Fish className="w-[16px] h-[16px]" />
            <FlameKindling className="w-[16px] h-[16px]" />
            <Footprints className="w-[16px] h-[16px]" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-2 justify-between mt-4">
        <div className="flex">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-2">
            <p className="text-sm">Owner1</p>
            <p className="text-xs">5 days ago</p>
          </div>
        </div>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  <RxDoubleArrowRight className="text-primary" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Visit camp name</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ListingCard;
