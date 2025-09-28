// ui/3d-card.tsx
"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

type CardContainerProps = {
    children: ReactNode;
    className?: string;
};

export function CardContainer({ children, className }: CardContainerProps) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        setX(offsetX);
        setY(offsetY);
    };

    return (
        <div
            className={`relative perspective-1000 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { setX(0); setY(0); }}
            style={{ perspective: 1000 }}
        >
            {React.Children.map(children, (child) => {
                if (!React.isValidElement<CardBodyProps>(child)) return child;
                return React.cloneElement(child, { parentX: x, parentY: y });
            })}
        </div>
    );
}

type CardBodyProps = {
    children: React.ReactNode;
    className?: string;
    parentX?: number;
    parentY?: number;
};

export function CardBody({ children, className, parentX = 0, parentY = 0 }: CardBodyProps) {
    // const rotateX = useTransform(useMotionValue(parentY), [-100, 100], [10, -10]);
    // const rotateY = useTransform(useMotionValue(parentX), [-100, 100], [-10, 10]);

    return (
        <motion.div
            className={`relative transform-style-3d ${className}`}
            style={{
                rotateX: (parentY / 20) || 0,
                rotateY: (parentX / 20) || 0,
                transformStyle: "preserve-3d",
                transition: "transform 0.2s ease",
            }}
        >
            {children}
        </motion.div>
    );
}

type CardItemProps = {
    children: ReactNode;
    translateZ?: number | string;
    as?: React.ElementType;
    className?: string;
};

export function CardItem({ children, translateZ = 0, as: Component = "div", className }: CardItemProps) {
    return (
        <Component
            className={className}
            style={{
                transform: `translateZ(${translateZ}px)`,
                textShadow: '1px 1px 2px black',
            }}
        >
            {children}
        </Component>
    );
}
