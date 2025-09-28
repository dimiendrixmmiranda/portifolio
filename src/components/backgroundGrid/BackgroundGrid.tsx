import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundGridProps {
    children: React.ReactNode
}
export function BackgroudGrid({ children }: BackgroundGridProps) {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center bg-preto">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#292828_1px,transparent_1px),linear-gradient(to_bottom,#292828_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {children}
        </div>
    );
}
