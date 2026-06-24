// Nomenclatura de variáveis

const categories = [
  {
    title: 'Beginner',
    followers: 0
  },
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserCategory(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUserData = await response.json();

  const descendingOrderCategories = categories.sort((category1, category2) =>  category2.followers - category1.followers); 

  const matchedCategory = descendingOrderCategories.find(category => githubUserData.followers >= category.followers)

  const result = {
    githubUsername,
    matchedCategory: matchedCategory.title
  }

  return result
}

getUserCategory({ query: {
  username: 'anacarolina-tamie'
}}, {}).then(console.log)