import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface MenuItemProperties extends RouteComponentProps {
    title: string;
    imageUrl: string;
    size: string;
    linkUrl: string;
}

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }: MenuItemProperties) => (
    <div className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        ></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
