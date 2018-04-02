/**
 * Card Area Component
 * @param opts - area options
 * @param jsonArr - json array of card objects
 */

import Card from './card'

export default class CardArea extends React.Component {

    render() {

        const cardLoop = this.props.jsonArr.map((obj, i) =>
            <Card cardJson={obj} key={i} />
        )
        
        return (
            
            <section className="card-area">
                {cardLoop}

                <style jsx>{`
                    .card-area {
                        display:flex;
                        flex-wrap:wrap;
                        justify-content:space-around;
                    }
                `}</style>
            </section>
        )
    }
    
}