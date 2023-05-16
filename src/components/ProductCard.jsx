export default function ProductCard ({ img, title, price }) {
    return (
        <div className="card">
            <img src= {img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`$ ${price}`}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}