// Registry of Compare-page topics. Order here is the order shown in the topic picker.
// Each topic is a three-state matrix (cells carry a `state`) or a value matrix
// (cells carry a `value`). ComparisonCell renders based on which the cell has.
import sensitiveData from './sensitiveData.json'
import individualRights from './individualRights.json'
import timeBasedObligations from './timeBasedObligations.json'
import enforcementPenalties from './enforcementPenalties.json'

export const COMPARISON_TOPICS = [
  individualRights,
  sensitiveData,
  timeBasedObligations,
  enforcementPenalties,
]
