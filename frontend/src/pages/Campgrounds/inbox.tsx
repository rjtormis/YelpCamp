import InboxItem, { Message } from "@/components/inbox-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, Reply, Trash2 } from "lucide-react";

function Inbox() {
  const messages: Message[] = [
    {
      user: "John Doe",
      userId: "u001",
      subject: "Reservation Inquiry",
      content: "Can I reschedule my reservation to next week?",
      date: "2025-01-20",
      status: "read",
    },
    {
      user: "Jane Smith",
      userId: "u002",
      subject: "Cancellation Request",
      content: "I need to cancel my booking for February 10th.",
      date: "2025-01-21",
      status: "unread",
    },
    {
      user: "Alice Johnson",
      userId: "u003",
      subject: "Special Request",
      content: "Can I get a campsite closer to the lake?",
      date: "2025-01-22",
      status: "read",
    },
    {
      user: "Mark Brown",
      userId: "u004",
      subject: "Payment Issue",
      content: "My payment isn't going through. Can you assist?",
      date: "2025-01-23",
      status: "unread",
    },
    {
      user: "Emily Davis",
      userId: "u005",
      subject: "Early Check-In",
      content: "Is it possible to check in earlier on March 5th?",
      date: "2025-01-24",
      status: "unread",
    },
  ];
  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  };

  return (
    <div className="p-4 grid grid-cols-2 gap-4 flex-grow">
      <div className="">
        <Tabs defaultValue="all" className="">
          <div className="flex justify-between border-b-[1px] pb-2">
            <span className="my-auto">Inbox</span>
            <TabsList className="ml">
              <TabsTrigger value="all">All mail</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
            </TabsList>
          </div>
          <Input placeholder="Search" className="my-4" />
          <TabsContent value="all">
            {messages.map((message) => (
              <InboxItem key={message.userId} message={message} />
            ))}
          </TabsContent>
          <TabsContent value="unread">Change your password here.</TabsContent>
        </Tabs>
      </div>
      <div className=" px-2">
        <div className="flex gap-1 border-b-[1px] pb-2 ">
          <div></div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  <Trash2 />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete message</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Separator orientation="vertical" className="h-[24px] my-auto" />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  <Reply />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reply</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  <Check />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mark as read</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className=" flex justify-between">
          <div className="flex gap-2 my-4">
            <Avatar className=" rounded-full">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs">Subject</p>
            </div>
          </div>
          <p className="my-auto">Oct 22,2023, 9:00 AM</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure in adipisci a
          molestias rem soluta. Placeat ab ea quidem dolorum dolores autem facilis sapiente, maxime
          perferendis, porro qui incidunt. In quis blanditiis facilis, adipisci perferendis quia,
          mollitia voluptatibus exercitationem porro, numquam officia odit. Hic repellendus commodi
          unde sunt temporibus cupiditate quia, eaque ut perferendis suscipit! Natus quibusdam
          suscipit recusandae? Eligendi aut possimus odio esse hic debitis et eum labore, dolores
          quibusdam doloremque vel consectetur commodi voluptatum eaque temporibus. Labore id quia
          magnam quos impedit asperiores perferendis a, commodi temporibus.
        </p>
        <div className="my-8 flex flex-col">
          <Textarea placeholder="Type your message here." />
          <div className="ml-auto">
            <Button className="my-3 ml;-">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
