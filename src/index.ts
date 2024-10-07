import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Jai Vinayaka Jai Murugan Jai Sri Maha Kanaka Durgama Devi Thalli Garu')
})

export default app
