import React, { Component } from 'react';
import { connect } from 'react-redux';

import CharacterInformationPanel from 'components/CharacterInformationPanel';

class NewChar extends Component {
    render() {
        return (
            <div>
                <CharacterInformationPanel/>
            </div>
        )
    }
}

export default connect()(NewChar)