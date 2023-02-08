import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>TOPページ</h1>
            </header>
            <main>
                <p>商品情報</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public