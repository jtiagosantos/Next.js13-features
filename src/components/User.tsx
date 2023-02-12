export const User = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000))

  const response = await fetch('https://api.github.com/users/jtiagosantos', {
    cache: 'no-store',
  })
  const user = await response.json()

  return (
    <div>
      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
