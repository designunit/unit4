import react from 'react'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';

export default ({ children }) => (
    <DefaultLayout>
        <div className="container">
            <Title caption="repository">РЕПОЗИТОРИЙ</Title>

            <div className="gallery">
                <div className="icon">
                    <a href="/repository/chistopol">
                        <img src="/static/repository/chistopol/links/01.jpg" className="icon-img" />

                        <div className="icon-overlay">
                            <div className="icon-text"><p>KARL MARX<br />BOULEVARD<br />PHASE #1</p></div>
                        </div>
                    </a>
                </div>

                <div className="icon">
                    <a href="/chistopol2.0">
                        <img src="/static/repository/chistopol2.0/links/01.jpg" className="icon-img" />
                        <div className="icon-overlay">
                            <div className="icon-text"><p>KARL MARX<br />BOULEVARD<br />PHASE #2</p></div>
                        </div>
                    </a>
                </div>

                <div className="icon">
                    <a href="/kemb">
                        <img src="/static/repository/kemb/links/01.jpg" className="icon-img" />
                        <div className="icon-overlay">
                            <div className="icon-text"><p>KARPOVKA<br />EMBANKMENT</p></div>
                        </div>
                    </a>
                </div>

                <div className="icon">
                    <a href="/krvostok">
                        <img src="/static/repository/krvostok/links/01.jpg" className="icon-img" />
                        <div className="icon-overlay">
                            <div className="icon-text"><p>RED EAST</p></div>
                        </div>
                    </a>
                </div>

                <div className="icon">
                    <a href="/trollgardens">
                        <img src="/static/repository/trollgardens/links/01.jpg" className="icon-img" />
                        <div className="icon-overlay">
                            <div className="icon-text"><p>TROLL GARDENS</p></div>
                        </div>
                    </a>
                </div>

                <div className="icon">

                </div>
            </div>
        </div>
    </DefaultLayout>
)