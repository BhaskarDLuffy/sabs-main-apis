import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('cool bro')
})

export default app
