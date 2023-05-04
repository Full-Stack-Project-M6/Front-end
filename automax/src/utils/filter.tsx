export function removeDuplicateItems(array:object[], keyFilter:string ) {
    const map = new Map()

    array.forEach((elem:any) => {
      map.set(elem[keyFilter][keyFilter],elem)
    })

    const uniqueList = Array.from(map.values())

    return uniqueList
}

export function filterArray(array:object[], keyFilter: string, elemToCompare: string) {
    const filteredList = array.filter((elem:any) => elemToCompare == "" ? true : elem[keyFilter][keyFilter] == elemToCompare)

    return filteredList
}

export function filterArrayByRange(array:object[], keyFilter:string, minAndMaxList: string[]) {
  const filteredList = array.filter(
    (elem:any) =>
    +minAndMaxList[1] == 0 ?
    true
    :
    elem[keyFilter] >= +minAndMaxList[0] && elem[keyFilter] <= +minAndMaxList[1] )

  return filteredList
}