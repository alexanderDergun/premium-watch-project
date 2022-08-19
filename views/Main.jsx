const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');
const MainCard = require('./MainCard');

module.exports = function Main({ user, watchArr }) {
    // console.log(user);
    return (
        <Layout user={user}>
            <div className='container'>
                <div className='containerLeft'>
                    <div className='headerContainer'>
                        <h1>
                            Watches that show much
                            more than just time ! 
                            😵
                        </h1>
                        <h4>
                            Handpicked collection of premium time keepers
                            for all purposes and ages.
                        </h4>
                    </div>
                    <div className='catalogContainer'>
                    <hr></hr>
                        <div className='catalogHeader'>
                            <span> <h5>Catalog</h5> </span>
                            <div className='catalogArrows'>

                                <div className='leftArrow'>
                                    <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 7C30.5523 7 31 7.44772 31 8C31 8.55228 30.5523 9 30 9V7ZM0.292894 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292894 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292894 8.70711ZM30 9H1V7H30V9Z" fill="#282828" />
                                    </svg>
                                </div>
                                <div className='rightArrow'>
                                    <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928934C23.9526 0.53841 23.3195 0.53841 22.9289 0.928934C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM1 9L30 9L30 7L1 7L1 9Z" fill="#282828" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="catalogList">
                            {watchArr.length !== 0
                                ? watchArr.map((card) => <Card card={card} />)
                                : <div>Карт нет</div>
                            }
                        </div>
                    </div>
                </div>
                <div className='mainCardContainer'>
                    <MainCard />
                </div>
            </div>
        </Layout>
    )
}