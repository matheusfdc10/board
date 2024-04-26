import { ColorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";
import { transform } from "next/dist/build/swc";

interface RectangleProps {
    id: string;
    layer: RectangleLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

export const Rectangle: React.FC<RectangleProps> = ({
    id,
    layer,
    onPointerDown,
    selectionColor,
}) => {
    const { x, y, width, height, fill } = layer;

    return (
        <rect
            className="drop-shadow-md"
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(${x}px, ${y}px)`,
            }}
            x={0}
            y={0}
            width={width}
            height={height}
            strokeWidth={1}
            fill={fill ? ColorToCss(fill) : "#000"}
            stroke={selectionColor ||  "transparent"}
        />
    )
}