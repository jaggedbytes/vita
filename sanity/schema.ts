import { type SchemaTypeDefinition } from 'sanity'
import blockContent from './schemas/blockContent'
import resume from './schemas/resume'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, resume],
}
