// Registry of Compare-page topics. Order here is the order shown in the topic picker.
// Each topic is a three-state matrix (cells carry a `state`) or a value matrix
// (cells carry a `value`). ComparisonCell renders based on which the cell has.
import scope from './scope.json'
import individualRights from './individualRights.json'
import sensitiveData from './sensitiveData.json'
import legalBases from './legalBases.json'
import consentStandards from './consentStandards.json'
import timeBasedObligations from './timeBasedObligations.json'
import internationalTransfers from './internationalTransfers.json'
import enforcementPenalties from './enforcementPenalties.json'

export const COMPARISON_TOPICS = [
  scope,
  individualRights,
  sensitiveData,
  legalBases,
  consentStandards,
  timeBasedObligations,
  internationalTransfers,
  enforcementPenalties,
]
