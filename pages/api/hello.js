// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect'

const Get = (req, res) => {
  console.log(req.query)
  res.status(200).json({ name: 'This is the get method' })
}
const Post = (req, res) => {
  res.status(200).json({ name: 'This is the post method' })
}

export default nc()
  .get(Get)
  .post(Post)
