
import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
    params: {
        boardId: string;
    }
}

const BoardIdPage: React.FC<BoardIdPageProps> = ({
    params
}) => {
    return ( 
        <Room roomId={params.boardId}>
            <Canvas boardId={params.boardId} />
        </Room>
     );
}
 
export default BoardIdPage;