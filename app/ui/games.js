import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="games-page">
                <h1>App: Users</h1>
                <ul>
                    {this.props.games.map((game, i) => {
                        return (
                            <li key={game.id} onClick={this.props.onClick(i)}>{game.board}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});