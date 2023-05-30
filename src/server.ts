import { connect } from 'mongoose'
import config from './config/index'
import app from './app'

async function run() {
  try {
    await connect(config.database_url as string)
    console.log('Database connection successful')
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('database is not connected')
  }
}
run().catch(err => console.log(err))
