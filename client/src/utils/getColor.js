export const getColor = (category) => {
  if (category === 'Shops') return 'purple'
  if (category === 'Services') return 'teal'
  if (category === 'Health and sport') return 'yellow'
  if (category === 'Entertainment') return 'pink'
  if (category === 'Transportation') return 'blue'
  if (category === 'Restaurant and bars') return 'cyan'
  if (category === 'Other') return 'orange'
  return category
}
