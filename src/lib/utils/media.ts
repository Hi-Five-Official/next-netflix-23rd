export const removeDuplicateItems = <T extends { id: number; media_type: string }>(
  items: T[],
): T[] => Array.from(new Map(items.map(item => [`${item.media_type}-${item.id}`, item])).values());
