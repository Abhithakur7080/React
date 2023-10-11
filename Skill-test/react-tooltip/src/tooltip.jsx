export const Tooltip = ({
    handleMouseOver,
    handlePos,
    handleMouseLeave,
    position,
    hovering
}) => {
    return (
        <>
            <div className="grp-name">
                Select the position for Hovering...
            </div>
            <div className="btn-group">
                <button
                    className={position === "left" ? "btn active" : "btn"}
                    onClick={() => handlePos("left")}>
                        Left
                </button>
                <button
                    className={position === "top" ? "btn active" : "btn"}
                    onClick={() => handlePos("top")}>
                        Top
                </button>
                <button
                    className={position === "bottom" ? "btn active" : "btn"}
                    onClick={() => handlePos("bottom")}>
                        Bottom
                </button>
                <button
                    className={position === "right" ? "btn active" : "btn"}
                    onClick={() => handlePos("right")}>
                        Right
                </button>
            </div>
            <div className="hover-group">
                <button 
                    className="pos-box"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseLeave}>
                        Hover Over me!!!  &nbsp;
                </button>
                {hovering && (
                    <div className={position}>
                        thanks for hovering in {position} position!!!
                    </div>
                )}
            </div>
        </>
    )
}