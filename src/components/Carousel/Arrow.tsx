export type ArrowProps = {
    color: string
}

export const Arrow: React.FC<ArrowProps> = ({ color }) => (
    <svg width="60" height="37" viewBox="0 0 120 74" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={color}
            stroke="none"
            d="M 112.643669 44.125885 L 119.769554 37 L 83 0.230446 L 75.874123 7.356331 L 100.517784 32 L 0 32 L 0 42 L 100.517784 42 L 75.874123 66.643669 L 83 73.769554 L 112.643669 44.125885 Z"
        />
    </svg>
)
