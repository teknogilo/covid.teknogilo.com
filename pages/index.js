import Layout from '../components/Layout'
import Main from '../components/home/Main'
import Stats from '../components/home/Stats'
import Chart from '../components/home/Chart'


export default function Home() {
  return (
    <div>
      <Layout title="Home">
        <Main/>
        <Stats/>
        <Chart/>
      </Layout>
    </div>
  )
}