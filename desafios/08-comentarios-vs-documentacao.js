function isEmailAlreadyUsed(email) {
  const userWithEmail = getUserByEmail(email);

  return Boolean(userWithThisEmail);
}

async function registerUser(userData) {

  const { email, name, avatar } = userData

  if (!avatar) return { error: 'avatar is required' };
  if(!name) return { error: 'name is required' };
  if(!email) return {error: 'email is required'};

  if (isEmailAlreadyUsed) {
    return {error: 'emails already used'}; 
  }

  const convertedAvatar = convertImageToJPG(avatar);

  const newUser = await createUser({ 
    email, 
    name, 
    avatar: convertedAvatar })

  return { user: newUser };
}