import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  click?: () => void;
  buttonTxt?: string;
  img?: string;
  buttonIcn?: string;
}

const MeetingModel = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  click,
  buttonTxt,
  img,
  buttonIcn,
}: MeetingModelProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {img && (
            <div className="flex justify-center">
              <Image src={img} alt="image" width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <Button
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={click}
          >
            {buttonIcn && (
              <Image src={buttonIcn} alt="button icon" width={13} height={13} />
            )} &nbsp;
            {buttonTxt || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModel;
