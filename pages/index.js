/**
 * Index Page
 */
import Layout from '../components/layoutDefault'
import CardArea from '../components/cardArea'
import mockCardJson from '../data/cards.json'

export default () => {

    return(
        <Layout title='Home'>
            <CardArea jsonArr={mockCardJson}/>
        </Layout>
    )
    
}