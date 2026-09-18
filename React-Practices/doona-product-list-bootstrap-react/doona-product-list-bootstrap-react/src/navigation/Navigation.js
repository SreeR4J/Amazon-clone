
import React from 'react';

function Navigation({ onSearch }) {


    const searchValue = (event) => {

        const searchVal = event.target.value;
        onSearch(searchVal);
    }

    return (
        <div className="container-fluid d-flex justify-content-end bg-primary-subtle">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary-subtle text-white">
                <a className="navbar-brand" href="#">Product List</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Contact Us </a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#">About </a>
                        </li>

                    </ul>

                    <form className=" d-flex gap-3 ">
                        <input className="form-control " type="search" onChange={searchValue} placeholder="Search" />

                    </form>
                </div>

            </nav>
        </div>
    );
}

export default Navigation;
