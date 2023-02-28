export function useHeterotopiaGradient(): string {
    const angle = 90
    let colors: Array<[number, string]> = [
        [Math.random(), '#ff00ff'],
        [Math.random(), '#1ac4ff'],
        [Math.random(), '#ff7e00'],
    ]
    colors = colors.sort(() => -1 + Math.random() * 2)
    colors[0][0] = 0
    colors[2][0] = 1

    const gradient = colors
        .map(([value, color]) => `${color} ${value * 100}%`)
    return `linear-gradient(${angle}deg, ${gradient.join(', ')})`
}
