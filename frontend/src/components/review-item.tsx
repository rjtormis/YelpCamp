import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export interface ReviewItemProps {
  name: string;
  rating: number;
  review: string;
}

function ReviewItem({ name, rating, review }: ReviewItemProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex gap-2">
        <Avatar className="w-[24px] h-[24px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 className="text-sm">{name}</h3>
      </div>
      <p className="text-muted-foreground text-xs">Rating: {renderStars(rating)}</p>
      <p className="mt-2 text-sm">{review}</p>
    </div>
  );
}

export default ReviewItem;
