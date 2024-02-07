import Board , {moveCard , moveColumn , removeCard , addCard} from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
import useBoard from '../../store/Board'
import './Board.css'
const BoardPage = () => {
    const {board , setBoard} = useBoard()
    return (
        <div className="board-container">
            <span>Trello Board</span>
            <Board>
                {board}
            </Board>

        </div>
    )
}

export default BoardPage;
