import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6 space-y-24">
        <div className="space-y-10">
          <div className="border-b pb-6 space-y-4">
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-8 w-2/3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-4">
            <Card className="w-full max-w-xs h-48"></Card>
            <Card className="w-full max-w-xs h-48 hidden lg:block"></Card>
            <Card className="w-full max-w-xs h-48 hidden lg:block"></Card>
          </div>
        </div>
        <div className="space-y-10">
          <div className="border-b pb-6 space-y-4">
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-8 w-2/3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-4">
            <Card className="w-full max-w-xs h-48"></Card>
            <Card className="w-full max-w-xs h-48 hidden lg:block"></Card>
            <Card className="w-full max-w-xs h-48 hidden lg:block"></Card>
          </div>
        </div>
      </div>
    </section>
  );
}
