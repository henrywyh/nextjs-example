// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // do backend stuff , like calling databse, calling API
  res.status(200).json({ name: 'Backend Response' })
}
