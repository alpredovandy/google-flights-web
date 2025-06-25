export function truncateText(text: string | undefined | null, maxLength: number): string {
    if (text === undefined || text === null) {
        return '';
    }
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

export function toPascalCase(str: string): string {
    if (!str) return '';
    return str
        ?.replace(/[_-\s]+/g, ' ')
        ?.toLowerCase()
        ?.split(' ')
        ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        ?.join('');
}
