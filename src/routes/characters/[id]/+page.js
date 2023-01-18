import { fetchCharacters } from '$lib/utils'

export const load = async ({ params }) => {
    const items = await fetchCharacters()
    return items.find((item) => item.id == params.id)
}