export const fetchCharacters = async () => {
  const allCharacterFiles = import.meta.glob('/src/lib/data/characters/*.json')
  const iterableItemFiles = Object.entries(allCharacterFiles)

  const allItems = await Promise.all(
    iterableItemFiles.map(async ([path, resolver]) => {
      const data = await resolver()
      // Add imgSrc for each costume based on id
      const costumes = data.default.costumes?.map(costume => {
        return {
          ...costume,
          imgSrc: `Costume_${costume.id}`
        }
      }) || []

      // Add imgSrc for character based on id
      return {
        ...data.default,
        imgSrc: `Character_${data.default.id}`,
        costumes
      }
    })
  )

  return allItems
}

export const fetchKarts = async () => {
  const allKartFiles = import.meta.glob('/src/lib/data/karts/*.json')
  const iterableItemFiles = Object.entries(allKartFiles)

  const allItems = await Promise.all(
    iterableItemFiles.map(async ([path, resolver]) => {
      const data = await resolver()
      // Add imgSrc for kart based on id
      return {
        ...data.default,
        imgSrc: `/images/ItemIcon/kart/Kart_${data.default.id}.png`
      }
    })
  )

  return allItems
}

export const fetchTracks = async () => {
  const allTrackFiles = import.meta.glob('/src/lib/data/tracks/**/*.json')
  const iterableItemFiles = Object.entries(allTrackFiles)

  const allItems = await Promise.all(
    iterableItemFiles.map(async ([path, resolver]) => {
      const data = await resolver()
      const theme = path.split("/")[5]
      // Add imgSrc for track based on id
      return {
        ...data.default,
        imgSrc: `/images/Track/Loading/${data.default.id}.png`,
        theme
      }
    })
  )

  return allItems
}

export function findImage(images, filename) {
  return images[
    Object.keys(images).find((key) => key.includes(filename))
  ]();
}