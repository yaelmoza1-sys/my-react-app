
function Button({ type }) {
    return (
        <button className={`button ${type.toLowerCase()}`}>
            {type}
        </button>
    );
}

export default Button;
