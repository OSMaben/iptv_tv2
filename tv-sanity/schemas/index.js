import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import question from './questions'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import channel from './channel'
import plotSummaries from './plotSummaries'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  question,
  channel,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
