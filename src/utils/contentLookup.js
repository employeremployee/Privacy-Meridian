export function findArticleLocation(jurisdictionData, articleId) {
  for (const category of jurisdictionData.categories) {
    const article = category.articles.find((a) => a.id === articleId)
    if (article) return { article, categoryId: category.categoryId }
  }
  return null
}

export function getCategoryArticles(jurisdictionData, categoryId) {
  const category = jurisdictionData.categories.find((c) => c.categoryId === categoryId)
  return category ? category.articles : []
}
