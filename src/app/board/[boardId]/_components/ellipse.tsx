import { ColorToCss } from "@/lib/utils";
import { EllipseLayer } from "@/types/canvas";

interface EllipseProps {
    id: string;
    layer: EllipseLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

export const Ellipse: React.FC<EllipseProps> = ({
    id,
    layer,
    onPointerDown,
    selectionColor
}) => {
    return (
        <ellipse
            className="drop-shadow-md"
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(
                    ${layer.x}px,
                    ${layer.y}px
                )`
            }}
            cx={layer.width / 2}
            cy={layer.height / 2}
            rx={layer.width / 2}
            ry={layer.height / 2}
            fill={layer.fill ? ColorToCss(layer.fill) : "#000"}
            stroke={selectionColor || "transparent"}
            strokeWidth="1"
        />
    )
}