/**
 * Card Component
 * @param image
 * @param copy
 * @param footer
 */

export default class Card extends React.Component {

    render() {
        return(
            <div className="card">
                <div className="card__wrapper">
                    <div className="card__wrapper_area">
                        {this.props.cardJson.title}
                    </div>
                    <div className="card__wrapper_area">
                        <img src={this.props.cardJson.image} />
                    </div>
                    <div className="card__wrapper_area">
                        {this.props.cardJson.copy}
                    </div>
                    <div className="card__wrapper_area">
                        {this.props.cardJson.footer}
                    </div>
                </div>

                <style jsx>{`
                    .card {
                        margin:1rem;
                    }
                `}</style>
            </div>
        )
    }
}