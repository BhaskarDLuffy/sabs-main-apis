import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowHeaders: ['*'],
  allowMethods: ['*'],
}))

app.get('/', (c) => {
  const data: any = {
    animes: ["Naruto", "One Piece", "Kaiju No 8"]
  }
  try {
    return c.json(data, 200, {
      'Content-Type': 'application/json'
    })
  } catch (err) {
    return c.json(JSON.stringify(err), 404, {
      'Content-Type': 'application/json'
    })
  }
})

export default app