export type Message = {
  user: string;
  userId: string;
  subject: string;
  content: string;
  date: string;
  status: "read" | "unread";
};

function InboxItem({ message }: { message: Message }) {
  return (
    <div className="p-3 border border-solid my-2 rounded-xl">
      <div className="flex justify-between">
        <h3 className=" font-semibold">{message.user}</h3>
        <p className="text-xs">{message.date}</p>
      </div>
      <p className="text-xs my-1">{message.subject}</p>
      <p className="text-sm">{message.content}</p>
    </div>
  );
}

export default InboxItem;
