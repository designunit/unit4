export const Line = ({ line }) => (
    <span>
        <span
            style={{
                textTransform: line == 'design : : unit' ? 'lowercase' : 'uppercase',
                fontWeight: 'bold',
                fontSize: 42,
                color: line == 'design : : unit' ? 'black' : 'lightgray',
                marginRight: '1rem',
            }}
        >
            {line}
        </span>
        <span
            style={{
                fontSize: 42,
                fontWeight: 'bold',
                color: 'lightgray',
                marginRight: '1rem',
            }}
        >
            /
        </span>
    </span>
)