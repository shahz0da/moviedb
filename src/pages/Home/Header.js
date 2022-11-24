import React from 'react'
import './header.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="header">
                <ul>
                    <li><img className='logo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /></li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle className='forcolor' variant="none">
                                <h5>Movies</h5>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link className='link' to='/'>Popular</Link></Dropdown.Item>
                                <Dropdown.Item><Link className='link' to='/'>Now Playing</Link></Dropdown.Item>
                                <Dropdown.Item><Link className='link' to='/'>Upcoming</Link></Dropdown.Item>
                                <Dropdown.Item><Link className='link' to='/'>Top Rated</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                                <h5>TV Shows</h5>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link to='/'>Popular</Link></Dropdown.Item>
                                <Dropdown.Item><Link to='/'>Airing Today</Link></Dropdown.Item>
                                <Dropdown.Item><Link to='/'>On TV</Link></Dropdown.Item>
                                <Dropdown.Item><Link to='/'>Top Rated</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                                <h5>People</h5>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link to='/'>Popular People</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                                <h5>More</h5>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link to='/'>Discussions</Link></Dropdown.Item>
                                <Dropdown.Item><Link to='/'>Leaderboard</Link></Dropdown.Item>
                                <Dropdown.Item><Link to='/'>Support</Link></Dropdown.Item>
                                <Dropdown.Item><Link to='/'>API</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header