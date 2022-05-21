import React from 'react'

function Rocker(props) {
    return(
        <main className="main">
        <section className="filter container">
            <ul className={`filters__content${props.isDarkMode ? ' dark-theme': ''}`}>
                {props.showSkills ? (
                    <button
                        className="filters__button"
                        onClick={props.onClick}
                    >
                        Projects
                    </button>
                ) : (
                    <button
                        className="filters__button filter-tab-active"
                    >
                        Projects
                    </button>
                )}

                {props.showSkills ? (
                    <button
                        className="filters__button filter-tab-active"
                    >
                        Skills
                    </button>
                ) : (
                    <button
                        className="filters__button"
                        onClick={props.onClick}
                    >
                        Skills
                    </button>
                )}
            </ul>
        </section>
        </main>
    )
}

export default Rocker
