
import { Type } from 'N/search'
export function getSearchRecordTypes(): string[] {
  const a = []
  for (const key in Type) {
    a.push(Type[key])
  }
  return a
}
