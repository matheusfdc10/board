
import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: {
        boardId: string;
    }
}

const BoardIdPage: React.FC<BoardIdPageProps> = ({
    params
}) => {
    return ( 
        <Room roomId={params.boardId} fallback={<Loading />}>
            <Canvas boardId={params.boardId} />
        </Room>
     );
}
 
export default BoardIdPage;