"use client";

import * as React from "react";
import { CalendarPlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Calendar32({
  value,
  onChange,
}: {
  value?: Date;
  onChange?: (date?: Date) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal hover:bg-secondary hover:text-secondary-foreground"
          >
            {value
              ? value.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })
              : "Select date"}
            <CalendarPlusIcon />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="w-auto overflow-hidden p-0">
          <DrawerHeader className="sr-only">
            <DrawerTitle>Select date</DrawerTitle>
            <DrawerDescription>Set your date</DrawerDescription>
          </DrawerHeader>

          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={(selectedDate) => {
              onChange?.(selectedDate); // ✅ update parent
              setOpen(false);
            }}
            className="mx-auto [--cell-size:clamp(0px,calc(100vw/7.5),52px)]"
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
