export const Line = ({ line }) => line.map((x, i) => (
    <>
        <span
            style={{
                textTransform: x == 'design : : unit' ? 'lowercase' : 'uppercase',
                fontWeight: 'bold',
                fontSize: 42,
                color: x == 'design : : unit' ? 'black' : 'lightgray',
                marginRight: '1rem',
            }}
        >
            {x}
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
    </>
))