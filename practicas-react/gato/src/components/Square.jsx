export const Square = ({children, isSelected, updateBoard, index}) => {
    const clase = isSelected ? 'square is-selected' : 'square';
  
    const handleClick = () => {
      updateBoard(index);
    }
    return (
      <div onClick={handleClick} className={clase}>
          {children}
      </div>
    )
  }