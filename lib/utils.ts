export const removeSpacesFromEndOfLines = (input: string): string =>
	input.replace(/\s*\n/gm, '\n').trim()
